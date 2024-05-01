export function showMsg(content: string, type: string = 'info'){
  if(!content) return;

  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = content
  document.body.appendChild(div)

  switch(type){
    case 'info':
      // div.style.backgroundColor = ''
      break;
    case 'error':
      div.style.backgroundColor = '#ef4444';
      break;
    case 'success':
      div.style.backgroundColor = '#4ade80';
      break;
  }

  setTimeout(()=>{
    div.classList.add('transparent')
    setTimeout(()=>{
        document.body.removeChild(div)
    }, 500)
  }, 2000)
}