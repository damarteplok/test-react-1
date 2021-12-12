import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/*{filteredExpenses.length === 0 && <p>No Expenses Found.</p>}*/}
                {/*{filteredExpenses.length > 0 && filteredExpenses.map(expense => (*/}
                {/*    <ExpenseItem*/}
                {/*        key={expense.id}*/}
                {/*        title={expense.title}*/}
                {/*        amount={expense.amount}*/}
                {/*        date={expense.date}*/}
                {/*    />*/}
                {/*))}*/}
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
