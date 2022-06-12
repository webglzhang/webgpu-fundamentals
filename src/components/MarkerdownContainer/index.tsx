import React from "react";
import ReactMarkdown from "react-markdown";
import { demoAtricle } from "./atricle";
import "./index.scss";
import MarkdownNavbar from "../MarkerdownNav";

export class MarkerdownContainer extends React.Component{

    state =  {
      currentUrl:'',
      atricle:'',
      navVisible:true
    }

    setNavVisible(navVisible:boolean){
      this.setState({
        navVisible,
      })
    }

    render(){
      const {navVisible} = this.state;
        return (
          <div className="App">
            
            <div className="article-container">
              <ReactMarkdown children={demoAtricle} components={{
                  img(props){
                    return <img {...props} style={{ maxWidth: '100%'}} />
                  }
              }} />
            </div>
            <div className={`nav-container ${navVisible ? "show" : "hide"}`}>
              <div
              className="toggle-btn"
                onClick={() => {
                  this.setNavVisible(!navVisible);
                }}
                >
                {navVisible ? "目录 →" : "← 目录"}
              </div>
              <MarkdownNavbar source={demoAtricle} />
            </div>
         </div>
        )
    }
}