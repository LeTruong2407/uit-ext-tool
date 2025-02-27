<!DOCTYPE html>
<html>
  <head>
    <title>Source and Output Box</title>
    <style>
      
        
      .box {
        position:fixed;
        width: 385px; 
        height: 350px;
        left: 40%;
        top:15%;
        max-width: 905px;
        max-height: 951px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  
        background: rgb(1,5,29);
background: -moz-linear-gradient(90deg, rgba(1,5,29,1) 0%, rgba(20,89,88,1) 49%, rgba(52,246,205,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(1,5,29,1) 0%, rgba(20,89,88,1) 49%, rgba(52,246,205,1) 100%);
background: linear-gradient(90deg, rgba(1,5,29,1) 0%, rgba(20,89,88,1) 49%, rgba(52,246,205,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#01051d",endColorstr="#34f6cd",GradientType=1);
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 5%;
        opacity: 0.9;
       
        visibility:initial;
      }
      .source {
        flex-basis: 25%;
        padding: 10px;
        color :azure;
        font-family:cursive;
        overflow: auto;
        display: none;
      }
      
      .output {
        padding: 10px;
        color : white;
        overflow: auto;
        font-family: cursive;
        box-sizing: border-box;
       
       
        padding: 10px;
        margin-top: -30px;
      }
      .output h2 span{
        
        font-size: 19px;
        color : white;
        
      }
      .paraphrase {
        padding: 10px;
        color : white;
        overflow: auto;
     
        box-sizing: border-box;
       margin-left: 115px;
       
      font-size: 19px;
        margin-top: -37px;
      }
      
      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        text-decoration:chocolate;
        font-size: 100cm;       
      }
      
      .input-textarea {
        width: 100%;
        min-height: 100px;
        padding: 10px;
        box-sizing:border-box;
    
        background-color: white;
        font-size: 19px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        border-radius: 7%;
        display: none;
      }
     
      .box-header { 
        /*background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,0,29,1) 35%, rgba(0,212,255,1) 100%);
        */
        color : white; 
        font-size: 22px;
        text-align: center;
      }
      .output-container {
        display: fixed;
        text-decoration: chocolate;
        justify-content: center;
        align-items: center;
        min-height: 100px;
        margin-top: -35px;
        width: 100%;
        
      }
      .output-textarea {
         width: 100%;
        height: 180px;
        padding: 10px;
        box-sizing: border-box;
        resize: none;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(247,249,251,1) 5%, rgba(247,249,250,1) 81%, rgba(255,255,255,1) 97%, rgba(247,249,250,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
        font-size: 19px;
        margin-top: 50px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        overflow-y: auto;
        color: black;
       border-radius: 9px;
        
      }
      .output-textarea::-webkit-scrollbar {
  width: 8px;
}

.output-textarea::-webkit-scrollbar-track {
  background: transparent;
}

.output-textarea::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 8px;
  border: 6px solid transparent;
 
}

#suggestion-tab,
#paraphrase-tab {
  cursor: pointer;
}


.output-textarea::-webkit-scrollbar-thumb:hover {
  background: #555;
}
      .approve-button {
      background-color: white;
      color: rgb(22,1,29);
        color: linear-gradient(90deg, rgba(22,1,29,1) 0%, rgba(107,5,147,1) 100%);
      padding: 2px 10px;
      
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 5px;
      position:fixed;
      margin-left: 250px;
      
    }
    </style>
    
  </head>

  <body>
   
    <div class="box">
        <div class="box-header" >
            <div class = "title"> <span>PAPER PROOFING</span>  </div>
    </div>
        <div class="source">
        <h2>Source</h2>
        <div class="input-container">
          <div class="input-textarea"></div>
         
        </div>
      </div>
      <div class="output">
        
        <h2> 
          <span id="suggestion-tab" class="active-tab">Suggestion | </span>
          <span id="paraphrase-tab" class="paraphrase-link"> Paraphrase</span>
        </h2>
        
        <div class="output-container">
            <div class="output-textarea" id ="output-textarea-1"></div>
        </div> 

        <div><p id="output-textarea-2"></p></div>
        <button class="approve-button" id="approve-button">Approve</button>

      </div>
    
    </div>

    
  </body>
</html>