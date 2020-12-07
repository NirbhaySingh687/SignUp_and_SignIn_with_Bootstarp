import React, { useContext, useState } from "react"
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"
import {UserContext} from "../context/UserContext"
import {toast} from "react-toastify"

const SignUp =()=>{
    const context = useContext(UserContext)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleFormSubmit = async(e) =>{
        e.preventDefault();
        
        try {
            const body = {name,email,password}
            const response = await fetch('http://localhost:5000/auth/register',{
                method : 'POST',
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(body)
            })

            const parseRes = await response.json()
            if(parseRes.length !== 0){
                context.setUser(parseRes)
                toast('Succesfully Register',{type:'info'})
            }else{
                toast('Incorrect User and Password',{type:'error'})
            }
        } catch (error) {
            console.error(error.message)
            toast(error.message,{type:'error'})
        }
    }
    
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className=''>Register here</CardHeader>
							<CardBody>
                            <FormGroup row>
									<Label for='Name' sm={3}>
										Name
									</Label>
									<Col sm={9}>
										<Input
											type='name'
											name='name'
											id='name'
											placeholder='provide your name'
											value={name}
											onChange={e => setName(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp