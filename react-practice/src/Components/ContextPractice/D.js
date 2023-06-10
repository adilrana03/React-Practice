import React,{useContext} from 'react'
import myContext from '../ContextPractice/Context'

const D = () => {
        console.log("D aclled");

        const data = useContext(myContext);
        return (
                <div>
                        <h1>D Component</h1>
                        <dl>
                                <dt> Name</dt>
                                <dd>{data.name}</dd>
                                <dt>City</dt>
                                <dd>{data.city}</dd>
                                <dt> Email</dt>
                                <dd>{data.email}</dd>
                        </dl>
                </div>
  )
}

export default D