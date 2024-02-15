'use client'
import Input from "../input/Input"
import "./form.css"
const Form = () => {
    return (
        <div className="form_main">
            <Input placeholder="Name" label="Name" />
            <Input placeholder="email" label="Email" />
            <Input placeholder="subject" label="Subject" />
            <label htmlFor="text" className="label_sec">Write Quote</label>
            <textarea name="text" placeholder="Write SomeThing...">
            </textarea>
        </div>
    )
}

export default Form