import React, {useState} from 'react'
import Message from './Message'

const ChatApp = () => {
    console.log("CHAT APP")
    const [msg, setMsg] = React.useState('')
    const [messageList, setList] = useState([])

    function handleCreate(e){
        e.preventDefault();
        setList(function(item){
            return [...item, msg]
        })
    }

    const eleList = messageList.map(function(item){
        return (
            <div key={item.id}>
                <h4>{item}</h4>
            </div>
        )
    })

  return (
    <div>
        <div>
            <h3>This is chat app</h3>
            <input type='name' value={msg} onChange={(e) => setMsg(e.target.value)}/>
            <button onClick={handleCreate}>Create</button>
        </div>
        {eleList}
        <br />
        <hr />
        <hr />
        <Message mes = {messageList} />
    </div>
  )
}

export default ChatApp