import { useEffect, useState } from 'react';
import axios from 'axios';

type Employee = {
    id: number;
    name: string;
    gender: string;
    age: number;
};

export const Practice = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://localhost:7155/api/Employee/GetEmployees')
            .then((response) => {
                setEmployees(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employees:', error);
                setError('Failed to load employees');
                setLoading(false);
            });
    }, []);

    return (
        <div className="practice">
            {loading && <p>Loading employees...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <ul>
                    {employees.map(emp => (
                        <li key={emp.id}>
                            <strong>{emp.name}</strong> - {emp.gender}, Age: {emp.age}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
