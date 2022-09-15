import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

export const UserProvider =({children})=>{
    const [customers, setCustomers] = useState('')
    const [books, setBooks] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/customer')
            const responseJSON = await response.json()
            setCustomers(responseJSON)
        }
        fetchData()
    }, [])

    const createCustomer = async({name, details, gender, rating, preview})=>{
        const response= await fetch('http://localhost:3001/customer',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, details, gender, rating, preview})
        })

        const data = response.json()
        setCustomers([data,...customers])
    }


    const deleteCustomer = async(id)=>{
        await fetch(`http://localhost:3001/customer/${id}`, {method: 'DELETE'})
        setCustomers(customers.filter((customer)=> customer.id !== id))
    } 

    const addBook = async({name, details, selected, rating, pic})=>{
        const response= await fetch('http://localhost:3001/books',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, details, selected, rating, pic})
        })

        const data = response.json()
        setBooks([data,...customers])
    }

    return(
        <UserContext.Provider value={{customers, deleteCustomer, createCustomer, addBook, books}}  >
            {children}
        </UserContext.Provider>
    )
}
export default UserContext