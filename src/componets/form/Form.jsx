'use client'
import Button from "../button/Button"
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
            <div className="w-100 d-flex justify-content-center mt-4">
                <Button lable={"Submit"} style={{ width: "150px" }} />

            </div>
        </div>
    )
}

export default Form