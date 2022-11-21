var face_size=[]
var place_x=[]
var place_y=[]
var song
var songIsplay=false
var amp
var music_btn=[]
var mouse_btn=[]
var vol
var m_x,m_y
var Speech_btn=[]
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result=[]
function preload(){
  song = loadSound("《樱桃小丸子》主题曲.mp3");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)
    music_btn = createButton("停止")
music_btn.position(10,10)
music_btn.size(175, 50);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '15px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)

mouse_btn = createButton("開始")
  mouse_btn.position(200,10)
  mouse_btn.size(175, 50);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '15px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(start/stop)")
  Speech_btn.position(390,10)
  Speech_btn.size(175, 50);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '15px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePres

  for (var i=0;i<5;i++){
    face_size[i] = random(1,3)
    place_x [i]= random(10,width)
    place_y [i]= random(10+100,height)
    }
  }
  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()  
    music_btn.style('background-color','#6c757d')
    mouse_btn.style('background-color','black')
    Speech_btn.style('background-color','black')
  
  }
  function mouse_btn_pressed(){
    song.pause()
    songIsplay = false
    music_btn.style('background-color','black')
    mouse_btn.style('background-color','#6c757d')
    Speech_btn.style('background-color','black')
  }
  function Speech_btn_pressed(){
    myRec.onResult = showResult;
    myRec.start();  
    music_btn.style('background-color','black')
    mouse_btn.style('background-color','black')
    Speech_btn.style('background-color','#6c757d')
  }
  function showResult()
   {
      console.log(myRec.resultString)
    if(myRec.resultValue==true) {
     // background(192, 255, 192);
     // text(myRec.resultString, width/2, height/2);
        
        result = myRec.resultString
        if(myRec.resultString==="開始.")
        {
          music_btn_pressed()
        }
        if(myRec.resultString==="停止.")
        {
           
            mouse_btn_pressed()
          }
    }
   }
  function draw() {
    background("#98A6D4");
    textSize(50)
    text(result,600,55)
    for(var j=0;j<5;j++)
    {
    push()
    translate(place_x[j],place_y[j])
    
    fill(0)
    arc( face_size[j],-15/face_size[j]+face_size[j],250/face_size[j],450/face_size[j],180,0)//頭髮

    fill("#ffddd2")
    rect(-4/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],15/face_size[j],20/face_size[j])//脖子
    
    fill("#ffddd2")
    arc(face_size[j],-132/face_size[j]+face_size[j],155/face_size[j],230/face_size[j],0,180)//臉
    
    
    if(mouseIsPressed)
    {  
     //mouseIsPressed為true，代表有按下滑鼠
      
      fill(0)
      rect(15/face_size[j]+face_size[j],-110/face_size[j]+face_size[j],35/face_size[j],2/face_size[j])//右眉毛
      rect(-50/face_size[j]+face_size[j],-120/face_size[j]+face_size[j],35/face_size[j],2/face_size[j])//左眉毛
    }

    else
    {   //mouseIsPressed為false，代表沒有按下滑鼠
      fill(0)
      rect(15/face_size[j]+face_size[j],-105/face_size[j]+face_size[j],35/face_size[j],2/face_size[j])//右眉毛
      rect(-50/face_size[j]+face_size[j],-105/face_size[j]+face_size[j],35/face_size[j],2/face_size[j])//左眉毛
    }
    
    ellipse(25/face_size[j]+face_size[j]+mouseX/200,-80/face_size[j]+face_size[j]/200,15/face_size[j],7/face_size[j])//右眼睛
    ellipse(-25/face_size[j]+face_size[j]+mouseX/200,-80/face_size[j]+face_size[j]/200,15/face_size[j],7/face_size[j])//左眼睛
    
    fill("#ffddd2")
    beginShape()//鼻子開始
    curveVertex(face_size[j],-110/face_size[j]+face_size[j])
    curveVertex(face_size[j],-75/face_size[j]+face_size[j])
    curveVertex(face_size[j],-55/face_size[j]+face_size[j])
    curveVertex(10/face_size[j]+face_size[j],-55/face_size[j]+face_size[j])
    curveVertex(9/face_size[j]+face_size[j],-65/face_size[j]+face_size[j])
    endShape(close)//鼻子結束
   
    fill("#e5989b")
    arc(face_size[j],-32/face_size[j]+face_size[j],11/face_size[j],5/face_size[j],180,0)//上嘴左
    arc(8/face_size[j]+face_size[j],-32/face_size[j]+face_size[j],11/face_size[j],5/face_size[j]/face_size[j],180,0)//上嘴右
    
    fill("#e5989b")
    arc(3.5/face_size[j]+face_size[j],-31.5/face_size[j]+face_size[j],20/face_size[j],5/face_size[j],0,180)//下嘴
    fill(0)
    beginShape()
    curveVertex(face_size[j],-30.5/face_size[j]+face_size[j])
    curveVertex(face_size[j],-30.5/face_size[j]+face_size[j])

    fill(0)
    rect(-2.5/face_size[j]+face_size[j],-32/face_size[j]+face_size[j],14/face_size[j],0.1/face_size[j])

    fill("#ffddd2")
    arc(14/face_size[j]+face_size[j],-38/face_size[j]+face_size[j],7/face_size[j],5/face_size[j],220,35)//嘴角線

    


    fill("#cdb4db")
    if(!songIsplay){
    rect(30/face_size[j]+face_size[j],-6/face_size[j]+face_size[j],30/face_size[j],130/face_size[j])//右手臂
    }
    else{
      vol = amp.getLevel()
      rect(30/face_size[j]+face_size[j],map(vol,0,1,0,30)*-6/face_size[j]+face_size[j],30/face_size[j],130/face_size[j])//右手臂
    }
    
    
    fill("#cdb4db")
    if(!songIsplay){
      rect(-50/face_size[j]+face_size[j],-6/face_size[j]+face_size[j],30/face_size[j],130/face_size[j])//左手臂
    }
    else{
      vol = amp.getLevel()
      rect(-50/face_size[j]+face_size[j],map(vol,0,1,0,30)*-6/face_size[j]+face_size[j],30/face_size[j],130/face_size[j])//左手臂
    }
    fill("#cdb4db")
    rect(-30/face_size[j]+face_size[j],-7/face_size[j]+face_size[j],70/face_size[j],130/face_size[j])//身體
  
    fill("#7209b7")
    arc(2.5/face_size[j]+face_size[j],-7/face_size[j]+face_size[j],50/face_size[j],20/face_size[j],0,180)//領口
    fill(0)
    
    fill("#ffddd2")
 
    ellipse(55/face_size[j]+face_size[j],125/face_size[j]+face_size[j],30/face_size[j],30/face_size[j])//右手
    
    

    
    ellipse(-43/face_size[j]+face_size[j],125/face_size[j]+face_size[j],30/face_size[j],30/face_size[j])//左手
    
    
    if(mouseIsPressed){
     //mouseIsPressed為true，代表有按下滑鼠
      fill("#ffddd2")
      rect(-48/face_size[j]+face_size[j],100/face_size[j]+face_size[j],9/face_size[j],18/face_size[j])//左手中指
      
      
        

    fill("#ffddd2")
    rect(50/face_size[j]+face_size[j],100/face_size[j]+face_size[j],9/face_size[j],18/face_size[j])//右手中指
    
    }

     fill("#6d597a")
    rect(-30/face_size[j]+face_size[j],110/face_size[j]+face_size[j],70/face_size[j],70/face_size[j])//裙子

    fill("#ffddd2")
    rect(5/face_size[j]+face_size[j],180/face_size[j]+face_size[j],20/face_size[j],60/face_size[j])//右腿
    rect(-20/face_size[j]+face_size[j],180/face_size[j]+face_size[j],20/face_size[j],60/face_size[j])//左腿

    fill("#ffffff")
    rect(5/face_size[j]+face_size[j],220/face_size[j]+face_size[j],20/face_size[j],20/face_size[j])//右襪子
    rect(-20/face_size[j]+face_size[j],220/face_size[j]+face_size[j],20/face_size[j],20/face_size[j])//左襪子

    fill("#da627d")
    ellipse(15/face_size[j]+face_size[j],240/face_size[j]+face_size[j],28/face_size[j],20/face_size[j])//右鞋子
    ellipse(-10/face_size[j]+face_size[j],240/face_size[j]+face_size[j]
      ,28/face_size[j],20/face_size[j])//左鞋子

pop()

   }
  }
  function mousePressed()
{
  if(!songIsplay){//按一下音樂開始或是暫停
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false
  }
}