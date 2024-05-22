import axios from "axios";

const url = "https://expensetracker-3fb91-default-rtdb.firebaseio.com/";

export async function storeExpenses(expenseData){
    const response = await axios.post(url + "expenses.json", expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses(){
    const response = await axios.get(url + "expenses.json");

    const expenses = [];

    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            desc: response.data[key].desc
        };
        expenses.push(expenseObj);
    }

    return expenses;
}


export function updateDBExpense(id, expenseData) {
    return axios.put(url + `expenses/${id}.json`, expenseData);
}

export function deleteDBExpense(id) {
    return axios.delete(url + `expenses/${id}.json`);
}