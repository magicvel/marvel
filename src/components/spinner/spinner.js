const Spinner = () => {
    return (
       
<svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g>
  <circle cx="60" cy="50" r="4" fill="#ffe626">
    <animate attributeName="cx" repeatCount="indefinite" dur="1.0204081632653061s" values="95;35" keyTimes="0;1" begin="-0.6566000000000001s"></animate>
    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.0204081632653061s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.6566000000000001s"></animate>
  </circle>
  <circle cx="60" cy="50" r="4" fill="#ffe626">
    <animate attributeName="cx" repeatCount="indefinite" dur="1.0204081632653061s" values="95;35" keyTimes="0;1" begin="-0.3234s"></animate>
    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.0204081632653061s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.3234s"></animate>
  </circle>
  <circle cx="60" cy="50" r="4" fill="#ffe626">
    <animate attributeName="cx" repeatCount="indefinite" dur="1.0204081632653061s" values="95;35" keyTimes="0;1" begin="0s"></animate>
    <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.0204081632653061s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
  </circle>
</g><g transform="translate(-15 0)">
  <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#650284" transform="rotate(90 50 50)"></path>
  <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#650284">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.0204081632653061s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
  </path>
  <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#650284">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.0204081632653061s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
  </path>
</g>
</svg>
    )
}

export default Spinner;