const employees = [
    {
        "id": 1,
        "name": "Rahul",
        "email": "rahul@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix UI Bug",
                "taskDescription": "Resolve alignment issues in the login page",
                "taskDate": "2025-02-12",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Report",
                "taskDescription": "Create a weekly performance report",
                "taskDate": "2025-02-13",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Priya",
        "email": "priya@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Database Backup",
                "taskDescription": "Take a full database backup",
                "taskDate": "2025-02-12",
                "category": "IT Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss project milestones",
                "taskDate": "2025-02-14",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve high-priority bugs in dashboard",
                "taskDate": "2025-02-15",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Aman",
        "email": "aman@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Write Blog",
                "taskDescription": "Create a blog post on AI trends",
                "taskDate": "2025-02-16",
                "category": "Content Writing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from team",
                "taskDate": "2025-02-17",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Presentation",
                "taskDescription": "Prepare slides for client meeting",
                "taskDate": "2025-02-18",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Neha",
        "email": "neha@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Testing API",
                "taskDescription": "Perform integration tests for new APIs",
                "taskDate": "2025-02-19",
                "category": "QA",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update Documentation",
                "taskDescription": "Revise technical documentation for new feature",
                "taskDate": "2025-02-20",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Vikas",
        "email": "vikas@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Marketing Strategy",
                "taskDescription": "Plan social media campaign",
                "taskDate": "2025-02-21",
                "category": "Marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Product Deployment",
                "taskDescription": "Deploy latest version of the product",
                "taskDate": "2025-02-22",
                "category": "DevOps",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];




const admin = [
    {
        "id": 1,
        "name": "Akshay",
        "email": "admin@me.com",
        "password": "123"
    },
]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
    
}