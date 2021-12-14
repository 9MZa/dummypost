import { Button } from "react-bulma-components"

function ButtonSwitch({ btnName, filter }) {
    return (
        <div>
            {btnName.map((item, index) => {
                return (
                    <Button style={{ marginLeft: '5px' }} key={index} onClick={() => filter(item)}> {item} </Button>
                )
            })}
        </div>
    )
}

export default ButtonSwitch
