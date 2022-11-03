import {useState} from 'react';

const Answer = (props) => {
    const {randomQuestion} = props;

    //&start to hold the form data
    const [formData, setFormData] = useState ({})
    // const [searchTerm, setSearchTerm] = useState('')

     const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

     }

     const handleSubmit = (e) => {
        e.preventDefault()
        randomQuestion(formData.searchTerm)

     }

    return(
        <b> <div class='scoreBtn'>
           ANSWER:<br/>
           
           <button class='decrease'>Decrease</button>
           <button class='increase'>Increase</button>
           <button class='reset'>Reset</button>
        </div> </b>
    )
}

export default Answer;

















