import img from './error.gif'
const ErrorMassage = () => {
    return (
        <img style={{ display: 'block',  height: '250px', objectFit: 'containe', margin:'0 auto'}} src={img}  alt='error'/>
    )
}

export default ErrorMassage;



// const ErrorMassage = () => {
//     return (
//         <igm src={process.env.PUBLIC_URL + '/error.gif'}/>
//     )
// }
// если использовать статичный файл из public
