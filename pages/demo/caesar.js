import React from 'react'
import Navbar from '@/components/CybersecurityServices/Navbar'
import Footer from '@/components/CybersecurityServices/Footer'
import { 
    Text, 
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
 } from '@chakra-ui/react'



export default function WhoWhatWhenWhereWhySuperSafe() {
    const [plaintext, setPlaintext] = React.useState('')
    const [ciphertext, setCiphertext] = React.useState('')
    const [key, setKey] = React.useState(1)
    const handlePlaintextChange = (event) => {
        const localPlaintext = event.target.value
        setPlaintext(localPlaintext);
        console.log("key: ", key);

        let localCiphertext = "";
        for (let ii = 0; ii < localPlaintext.length; ii++) {
            let plaintextOldValue = localPlaintext[ii].charCodeAt(0);
            let plaintextNewValue = plaintextOldValue + key;

            // capital
            if (plaintextOldValue < 91 && plaintextNewValue > 90) {
                plaintextNewValue -= 26;

            // lowercase
            } else if (plaintextOldValue > 90 && plaintextOldValue < 123 && plaintextNewValue > 122 ) {
                plaintextNewValue -= 26;
            }

            localCiphertext += String.fromCharCode(plaintextNewValue);
        }
        setCiphertext(localCiphertext);
    }
    const handleKeyChange = (value) => setKey(Number(value))

    return (
        <>
            <Navbar />

            <>
                <Text mb='8px'>Ciphertext: {ciphertext}</Text>
                <Input
                    value={plaintext}
                    onChange={handlePlaintextChange}
                    placeholder='Write your plaintext here.'
                    size='sm'
                />
                <Text mb='8px'>Caesar Key: {key}</Text>
                <NumberInput defaultValue={{key}} min={1} max={26} onChange={handleKeyChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </>

            <Footer />
        </>
    )
}