import img from './error.gif'
const ErrorMessage = () => {
    return (
        <img style={{ display: 'block',  height: '250px', objectFit: 'containe', margin:'0 auto'}} src={img}  alt='error'/>
    )
}

export default ErrorMessage;



// const ErrorMessage = () => {
//     return (
//         <igm src={process.env.PUBLIC_URL + '/error.gif'}/>
//     )
// }
// если использовать статичный файл из public
