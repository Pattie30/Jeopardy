const Form = (props) => {
    const {movieSeach} = props;
    return(
        <div>
            <form>
                <input type='text' required />
                <input type='submit' value='search'/>
            </form>
        </div>
    )
}

export default Form;

















