import React, { useState, createContext, useEffect } from 'react'
import run from '../config/config'
import { json } from 'react-router-dom';
export const FunctionContext = createContext();

export default function Context(props) {

    const[showingResult, setShowingResult]= useState(false);
    const [displayQuestion, setDisplayQuestion ]=useState("");
    const[storeQuestions, setStoreQuestions]=useState([]);
    const[displayAnswer, setDisplayAnswer]=useState("");
    const[input, setInput]= useState("");
    const[loading, setLoading]=useState(false);


    // 
    const[email, setEmail]=useState("");
    const[name, setName]=useState("");
    const[password, setPassword]=useState("");
    const[submit, setSubmit] =useState(false);
    // 
    const[user, setUser]=useState({})
    const saveUser=(user)=>{
        // setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }
    const saveSub = (sub)=>{
        
        localStorage.setItem("submitted", sub);
    }

    // 
    


    const newChat=()=>{
        setShowingResult(false);
    }

    const onSent = async (prompt) => { 
        const question = prompt !== undefined ? prompt : input; 
        if(prompt==undefined){//prompt not empty
            setStoreQuestions(prev=>[...prev, input])
        }
        
        setShowingResult(true);
        setLoading(true);
        
    console.log("Adding question:", question); 
        setDisplayQuestion(question); 
        
        let response;

      



        try {
            response = await run(question);  
            // console.log("API Response:", response); 
            let responseArray = response.split("**");
        let newArray="";
        for(let i = 0; i<responseArray.length;i++){
            if(i===0|| i%2!==1){
                newArray+=responseArray[i]
            }
            else{
                newArray+="<b>"+responseArray[i]+"</b>"
            }
        }
        let br = newArray.split("*");
        console.log(br);
        let newA="";
        for(let i= 0;i<br.length;i++){
            if(i===0|| i%2!==1){
                newA+=br[i];
            }
            else{
                newA+="<br>"+"<br>"+br[i]
            }
        }
    
            delayedMessage(newA)
            setLoading(false);
        }catch (error) {
            console.error("Error while sending message:", error);
        }
        
        setInput(''); 

    };
    function delayedMessage(message) {
        const text = message.split(" ");
        setDisplayAnswer("");
    
        for (let i = 0; i < text.length; i++) {
            type(text[i], i);
        }
    
        function type(word, index) {
            setTimeout(() => {
                setDisplayAnswer(prev => prev + word + " ");  
            }, 75 * index);  
        }
    }
    
    
    

    const passedObjects={
        showingResult,
        setShowingResult,
        displayQuestion,
        setDisplayQuestion,
        storeQuestions, 
        setStoreQuestions, 
        input,
        setInput,
        displayAnswer,
        loading,
        onSent,
        newChat,
        email,
        setEmail,
        name,
        setName,
        submit, 
        setSubmit,
        saveUser,
        user,
        setUser,
        saveSub,
        password,
        setPassword

    }

  return (
    <>
    <FunctionContext.Provider value={passedObjects}>
        {props.children}
    </FunctionContext.Provider>
    </>
  )
}
