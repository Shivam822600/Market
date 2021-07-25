import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header"
import Menuitem from "./Menuitem"
import Button from '@material-ui/core/Button';

import Grid from "@material-ui/core/Grid"
import Divider from '@material-ui/core/Divider'
import Paper from "@material-ui/core/Paper"

import StarRateIcon from '@material-ui/icons/StarRate';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
const useStyles = makeStyles((theme) => ({
  
  cursor: {
        cursor:'pointer',
        "&:hover":{
         color:'#7bed9f',
    
        }
    },
        pointer: {
            cursor:'pointer',
            "&:hover":{
            borderColor:'#f3a683',
        
            }
        }
}))

export default function Market(props) {
    const classes = useStyles();


   
  

    return (<div >


        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

            }}>

            <div style={{ width: "100%", background: "#fff" }}>
                
             <div style={{ marginBottom: 80 }}>
                    <Header history={props.history} />
        </div>
        <div style={{backgroundColor:'#ffffff' }}>
                    <Menuitem history={props.history} />
        </div>
        <Divider  />
          <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
        <span style={{width:'85%',backgroundColor:'#f1f2f6',height:50}}>
          <span  style={{display:'flex',marginTop:15,paddingLeft:15}}><text className={classes.cursor} style={{paddingRight:10}}>Home</text> /  <text style={{paddingLeft:10}} className={classes.cursor}>Professional Business Card Design</text></span>
        </span>
        </div>
        <div>
            <span style={{marginLeft:90,marginTop:15}}><b style={{fontSize:23,marginTop:15}}>Professional Business Card Design </b><br/><text style={{display:'flex',fontSize:18,marginLeft:90,marginTop:8}}>I will Design a Professional Business Card</text></span>
        </div>
        <div>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="/image1.jpg"style={{width:'71%' ,display:'flex',justifyContent:'center',marginTop:90}} />
           
            </Grid>
            
            <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'90%'}}>
           <span style={{display:'flex',justifyContent:'center',backgroundColor:'#f1f2f6',height:40}}>
            <text className={classes.cursor} style={{marginTop:8,fontWeight:'bolder'}}>Basic Package<hr style={{color:'#f1f2f6'}}/></text>
            <text className={classes.cursor} style={{marginTop:8,fontWeight:'bolder',paddingLeft:65}}>Standard Package</text>
            <text className={classes.cursor} style={{marginTop:8,fontWeight:'bolder',paddingLeft:65}}>Premium Package</text>
           </span>
           <div>
    
    <span style={{display:'flex',marginTop:15}}>
        <b style={{paddingLeft:13,fontSize:12}}>1 Layout + 1 person details + 300 dpi Print Ready<br/> JPG/PDF files</b>
        <b style={{marginLeft:200,color:'#7bed9f'}}>$15</b><br/>
      
        </span>
    </div>

    <div>
        <span style={{display:'flex',paddingLeft:15,marginTop:10}}>
            <AccessTimeIcon style={{fontSize:13,color:'#7bed9f',fontWeight:'bold',display:'flex',marginTop:2,paddingRight:3}}/><b style={{fontSize:13}}>3 Days Delivery</b>
        </span>
    </div>

    <div>
        <span style={{display:'flex',paddingLeft:16,marginTop:20}}>
            <b style={{fontSize:13}}>What's Included</b>
        </span>
    </div>
    <div>
        <span style={{display:'flex',paddingLeft:15,marginTop:10}}>
            <CheckIcon style={{fontSize:13,color:'#7bed9f',fontWeight:'bold',display:'flex',marginTop:2,paddingRight:3}}/><text style={{fontSize:13}}>Concept - 1</text>
        </span>
    </div>
    <div>
        <span style={{display:'flex',paddingLeft:15,marginTop:10}}>
            <CheckIcon style={{fontSize:13,color:'#7bed9f',fontWeight:'bold',display:'flex',marginTop:2,paddingRight:3}}/><text style={{fontSize:13}}>Print-Ready</text>
        </span>
    </div>
    <div>
        <span style={{display:'flex',paddingLeft:15,marginTop:10}}>
            <CheckIcon style={{fontSize:13,color:'#7bed9f',fontWeight:'bold',display:'flex',marginTop:2,paddingRight:3}}/><text style={{fontSize:13}}>Double-Sided</text>
        </span>
    </div>
    <Button variant="contained" style={{display:'flex',marginTop:20,marginLeft:50,backgroundColor:'#7bed9f',width:450}} >Prossed $15</Button>
   <div>
       <b className={classes.cursor} style={{display:'flex',marginLeft:230,marginTop:15,color:'#7bed9f'}}>Contact Seller</b>
   </div>
           </div>
    
            </Grid> 
            <div >
            <span>
            <img src="/image2.jpg" className={classes.pointer}  style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'6%',marginLeft:105 ,marginTop:65}} />
            <img src="/image3.jpg" className={classes.pointer} style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'6%',marginLeft:5 ,marginTop:65}} />
           </span>
           <span>
            <img src="/image1.jpg" className={classes.pointer} style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'6%',marginLeft:5 ,marginTop:65}} />
           </span>
           <span>
            <img src="/image4.jpg" className={classes.pointer} style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'6%',marginLeft:5 ,marginTop:65}} />
           </span>
           </div>
           
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
               <div >
                   <b style={{fontSize:35}}>About This Service</b>
                   <p>Business Card is not just any card; it is your first impression, business philosophy and a brief account of the wonders that you can do! In short, it represents you!<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
That is where I come into play! Hi, I am NAME. An experienced graphic designer using Adobe Photoshop, Illustrator & Corel Draw. I enjoy creating unique & professional quality designs for Business Cards, Letterheads & Envelopes. I’ll create the designs based on your needs to make it a perfect identity for your business. You must love it!
</p>
<div style={{display:'flex',marginTop:100}}>
<b style={{display:'flex',fontSize:15}}>Why Me?</b>
            <p>
• Professional & Quality Design<br/>
• High-Resolution Guaranteed<br/>
• Quick Response<br/>
• Quick Revisions until you satisfied<br/>
• Friendly Communication<br/>
• Free Minor changes anytime     </p>  
</div>
                   </div> 
                
                </Grid>

        <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:20}}>
            <div>
        <b style={{fontSize:25}}>Compare Package</b>
        <div style={{border:" 2px solid rgba(0, 0, 0, 0.1)",borderColor:'#ededed',width:'90%',height:300}}>
           <span style={{display:'flex',justifyContent:'center',backgroundColor:'#f1f2f6',height:70}}>
            <text  style={{marginTop:8,fontWeight:'bolder'}}>Package</text>
            <text  style={{marginTop:8,fontWeight:'bolder',paddingLeft:65}}>Basic Package<br/> $15</text>
            <text style={{marginTop:8,fontWeight:'bolder',paddingLeft:65}}>Standard Package <br/>  $25</text>
            <text style={{marginTop:8,fontWeight:'bolder',paddingLeft:65}}>Premium Package <br/>  $50</text>
           </span>
      
    
   <div  >
           
            <span  style={{marginTop:35,paddingLeft:15,fontSize:12}}>consept</span>
            <span  style={{marginTop:35}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:35}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:35}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</span>
           
           </div>

           <div style={{width:'100%',height:40,backgroundColor:'#ededed'}}>
           
            <span  style={{marginTop:8,paddingLeft:15,fontSize:12}}>Print-Ready</span>
            <span  style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;<CheckIcon style={{color:'#7bed9f'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CheckIcon style={{color:'#7bed9f'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CheckIcon style={{color:'#7bed9f'}}/></span>
           
           </div>

           <div >
           
            <span  style={{marginTop:8,paddingLeft:15,fontSize:12}}>Double-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sided</span>
            <span  style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;<CheckIcon style={{color:'#7bed9f'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CheckIcon style={{color:'#7bed9f'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CheckIcon  style={{color:'#7bed9f'}}/></span>
           
           </div>
    
           <div style={{width:'100%',height:40,backgroundColor:'#ededed'}} >
           
           <span  style={{marginTop:8,paddingLeft:15,fontSize:12}}>Source File</span>
           <span  style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;<ClearIcon style={{color:'#7bed9f'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ClearIcon style={{color:'#7bed9f'}}/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CheckIcon style={{color:'#7bed9f'}}/></span>
          
          </div>
          <div >
           
           <span  style={{marginTop:8,paddingLeft:15,fontSize:12}}>Total</span>
           <span  style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           $15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           $25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$50</span>
          
          </div>
          <div style={{marginTop:10}}>
           
           <span  style={{marginTop:8,paddingLeft:15,fontSize:12}}></span>
           <span  style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button variant="contained" style={{backgroundColor:'#7bed9f'}}>select</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button variant="contained" style={{backgroundColor:'#7bed9f'}}>select</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style={{marginTop:8}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" style={{backgroundColor:'#7bed9f'}}>select</Button></span>
          
          </div>

   
           </div>
           </div>

            </Grid>
            </Grid>

            <div >
            <b style={{fontSize:25,marginLeft:480}}>Customer Reviews</b>
            <div style={{display:'flex',justifyContent:'center'}}>
            
<Paper elevation={3} style={{width:'65%',height:120,borderRadius:'5px'}}>
<div>
<Grid container spacing={1}>
    
   
        <Grid item xs={12} sm={3} style={{display:'flex',marginTop:30,paddingLeft:50}}>
        <img src="./mm.jpg" width="75%" height="62%" style={{borderRadius:'5px'}} /> 
            </Grid>
            <Grid item sm={9} style={{display:'flex',marginTop:30,paddingRight:300}}>
            <text>chavelltaylor18 <br/><StarRateIcon style={{color:'#7bed9f',fontSize:21}}/>
            <StarRateIcon style={{color:'#7bed9f',fontSize:21}}/>
            <StarRateIcon style={{color:'#7bed9f',fontSize:21}} />
            <StarRateIcon style={{color:'#7bed9f',fontSize:21}} />
            
            </text>
            <p style={{display:'flex',fontSize:10,marginBottom:60}}><br/>Thank you for this pretty design. I went over my revision limit (2) and he still gave me my final request. It was truly amazing working with this seller. Thank you!</p>
            </Grid>
            
            </Grid>
</div>


</Paper>
</div>
                </div>
                <Divider style={{marginTop:20}}  />
<div style={{backgroundColor:'#ededed',width:"100%",height:60}}>
<text><b className={classes.cursor} style={{paddingLeft:450,fontSize:13,marginTop:70}}>Privacy policy </b>| <b className={classes.cursor} style={{fontSize:13,marginTop:20}}>Terms and Conditions</b><b style={{paddingLeft:90,fontSize:13,marginTop:20}}>All rights reserved. MarketPresso 2020</b></text>
</div>
        </div>
       </div> 

</div>
</div>
)

}