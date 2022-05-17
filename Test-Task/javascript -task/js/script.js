var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
},{
    start: 30,
    duration: 30,
    title: "Plan day"
},{
    start: 25,
    duration: 30,
    title: "Travel to work"
},{
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
},{
    start: 100,
    duration: 15,
    title: "Code review"
},{
    start: 180,
    duration: 90,
    title: "Have lunch with John"
},{
    start: 370,
    duration: 45,
    title: "Follow up with designer"
},{
    start: 400,
    duration: 30,
    title: "Push up branch"
},{
    start: 360,
    duration: 30,
    title: "Skype call"
}
];
data.push({start:data[data.length-1].start+50,duration:0,title:""});
var time=getTimeArray();
for(i=0;i<time.length;i++)
{
    if(time.indexOf(time[i])%2==0)
    {
        $("#container1").append(`<div class="border time-array" >${time[i]}</div>`);
    }
    else
    {
        $("#container1").append(`<div class="font time-array">${time[i]}</div>`);
    } 
}
function getTimeArray()
{
    var x = 30;
    var times = [];
    var tt = 60*8;
    for (var i=0;tt<19*60; i++) {
    var hh = Math.floor(tt/60); 
    var mm = (tt%60);
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
    if(times[i]=="0:00")
    {
       times[i]="12:00";
    } 
    else if(times[i]=="0:30")
    {
       times[i]="12:30";
    }
    else{} 
    tt = tt + x;
    }
    return times;  
}
for (var i = 0; i < data.length; i++) 
{
    var tempValue = [];
    if(data[i].start==0)
    {
        tempValue[i]=0;
        tempValue[i+1]=data[i+1].start-(data[i].start+ data[i].duration);  
    }
    else 
    {
        tempValue[i] =data[i].start-(data[i-1].start+ data[i-1].duration);
        tempValue[i+1]=data[i+1].start-(data[i].start+ data[i].duration);
    }
    var Contentheight= data[i].duration +"px";
    if(tempValue[i]<0 )
    {
        var element=$(`
        <div class="bg margin" style="height:${Contentheight};margin-top:${tempValue[i]}px;">
        ${data[i].title}</div>`)   
    }
    else if((tempValue[i]>=0 && tempValue[i+1]<0))
    {  
        var element=$(`
        <div class="bg width" style="height:${Contentheight};margin-top:${tempValue[i]}px;">
        ${data[i].title}</div>`)     
    }
    else
    {
        var element=$(`
        <div class="background " style=" height:${Contentheight};margin-top:${tempValue[i]}px;">
        ${data[i].title}</div>`)     
    }
    $(".content").append(element);
}


