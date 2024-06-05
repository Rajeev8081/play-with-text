import React ,{useState} from 'react'

export default function Mainform(props) {

   const  handleOnClick=()=>{
        let newText  = Text.toUpperCase();
        setText(newText);
   }
   const  handleLoClick=()=>{
    let newText  = Text.toLowerCase();
    setText(newText);
} 
const  handleClClick=()=>{
    let newText  = '';
    setText(newText);
}
const handleSpaceFixer = () => {
    let newText = Text.replace(/\s+/g, ' ').trim();
    setText(newText);
}
const handleTitleCase = () => {
    let newText = Text.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    setText(newText);
}

const handleReplace = () => {
    if (!Text.includes(oldText)) {
        alert('Old text does not match from original text.');
        return;
    }
    
    setShowReplaceOptions(true);
};

const handleFinalReplace = () => {
    let newtext = Text.split(' ').map(word => word === oldText ? newText : word).join(' ');
    setText(newtext);
    setShowReplaceOptions(false);
}

const handleAlternateCase = () => {
    let newText = Text.split('').map((char, index) => {
        if (index % 2 === 0) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
    setText(newText);
};

const handleSentenceCase = () => {
    let newText = Text.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    setText(newText);
};



     const handleOnChange=(event)=>{
        setText(event.target.value);

    }



    const[Text , setText]= useState('enter the here');
    const [oldText, setOldText] = useState('');
    const [newText, setNewText] = useState('');
    const [showReplaceOptions, setShowReplaceOptions] = useState(false);

  return (
   <>
     <div className='contanier'>
     <h2 className='container my-4 heading'>{props.heading}</h2>
  <div className="mb-3">
   
    <textarea className="form-control textarea-blur" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows={8} />
  </div>
  <div className="button-container">
  <button className="btn button-blur" onClick={handleOnClick}> upper case</button>
  <button className="btn button-blur" onClick={handleLoClick}> lower case</button>
  <button className="btn button-blur" onClick={handleClClick}> Clear Text</button>
  <button className="btn button-blur" onClick={handleSpaceFixer}>Fix Spaces</button>
  <button className="btn button-blur" onClick={handleTitleCase}>Title Case</button>
  <button className="btn button-blur" onClick={handleReplace}>Replace</button>
  <button className="btn button-blur" onClick={handleAlternateCase}>Alternate Case</button>
  <button className="btn button-blur" onClick={handleSentenceCase}>Sentence Case</button>
  </div>

  {showReplaceOptions && (
                    <div className="my-2">
                        <input
                            type="text"
                            placeholder="Old Text"
                            value={oldText}
                            onChange={(e) => setOldText(e.target.value)}
                            className="btn button-blur"
                        />
                        <input
                            type="text"
                            placeholder="New Text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            className="btn button-blur"
                        />
                        <button className="btn button-blur" onClick={handleFinalReplace}>Final Replace</button>
                    </div>
                )}



</div>
<div className="container my-3 lowersidemainform">
    <h1>Your text summery</h1>
    <h3>{(Text.length>0)?Text.split(" ").length:0} words and  {typeof Text === 'string' ? Text.replace(/\s/g, '').length : undefined}  character</h3>
    <h5>{0.08 *Text.split(" ").length } Mintue Read</h5>
    <h2>Preview</h2>
    <p>{Text}</p>

</div>
</>
    
  )
}
