document.addEventListener('DOMContentLoaded', function() {
    // Employee data array (original data for Admin section)
    const activeData = [
        {
            firstName: "John",
            lastName: "Doe",
            address: "123 Elm Street",
            mobile: "555-1234",
            email: "john.doe@example.com",
            department: "Sales",
            designation: "Manager",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-05-08",
                time: "1:45PM"
            },
            number: 1
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            address: "456 Oak Avenue",
            mobile: "555-5678",
            email: "jane.smith@example.com",
            department: "Marketing",
            designation: "Director",
            updated: {
                initial: "S",
                color: "#26a69a",
                date: "2024-03-08",
                time: "2:10PM"
            },
            number: 2
        },
        {
            firstName: "Alice",
            lastName: "Johnson",
            address: "789 Pine Road",
            mobile: "555-8765",
            email: "alice.johnson@example.com",
            department: "HR",
            designation: "Coordinator",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "2:30PM"
            },
            number: 3
        },
        {
            firstName: "Bob",
            lastName: "Brown",
            address: "321 Maple Lane",
            mobile: "555-2345",
            email: "bob.brown@example.com",
            department: "IT",
            designation: "Technician",
            updated: {
                initial: "B",
                color: "#1e88e5",
                date: "2024-03-08",
                time: "3:00PM"
            },
            number: 4
        },
        {
            firstName: "Charlie",
            lastName: "Davis",
            address: "654 Birch Boulevard",
            mobile: "555-3456",
            email: "charlie.davis@example.com",
            department: "Finance",
            designation: "Analyst",
            updated: {
                initial: "B",
                color: "#1e88e5",
                date: "2024-03-08",
                time: "3:15PM"
            },
            number: 5
        },
        {
            firstName: "Eve",
            lastName: "Miller",
            address: "987 Cedar Street",
            mobile: "555-4567",
            email: "eve.miller@example.com",
            department: "Operations",
            designation: "Supervisor",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "3:30PM"
            },
            number: 6
        },
        {
            firstName: "Frank",
            lastName: "Wilson",
            address: "321 Spruce Way",
            mobile: "555-5678",
            email: "frank.wilson@example.com",
            department: "Legal",
            designation: "Consultant",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "3:45PM"
            },
            number: 7
        },
        {
            firstName: "Grace",
            lastName: "Lee",
            address: "654 Palm Drive",
            mobile: "555-6789",
            email: "grace.lee@example.com",
            department: "Engineering",
            designation: "Developer",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "4:00PM"
            },
            number: 8
        },
        {
            firstName: "Henry",
            lastName: "Taylor",
            address: "987 Fir Street",
            mobile: "555-7890",
            email: "henry.taylor@example.com",
            department: "R&D",
            designation: "Scientist",
            updated: {
                initial: "A",
                color: "#ef5350",
                date: "2024-03-08",
                time: "4:15PM"
            },
            number: 9
        },
        {
            firstName: "Isabel",
            lastName: "Anderson",
            address: "123 Aspen Court",
            mobile: "555-8901",
            email: "isabel.anderson@example.com",
            department: "Customer Support",
            designation: "Agent",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "4:30PM"
            },
            number: 10
        },
        {
            firstName: "Jack",
            lastName: "Thomas",
            address: "456 Cypress Avenue",
            mobile: "555-9012",
            email: "jack.thomas@example.com",
            department: "Quality Assurance",
            designation: "Inspector",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "4:45PM"
            },
            number: 11
        },
        {
            firstName: "Karen",
            lastName: "Jackson",
            address: "789 Redwood Road",
            mobile: "555-0123",
            email: "karen.jackson@example.com",
            department: "Logistics",
            designation: "Coordinator",
            updated: {
                initial: "J",
                color: "#5c6bc0",
                date: "2024-03-08",
                time: "5:00PM"
            },
            number: 12
        }
    ];

    // draft data 
    const draftData = Array.from({ length: 30 }, (_, i) => {
        const names = ["Michael", "David", "Sarah", "Emily", "Daniel", "Olivia", "James", "Sophia", "William", "Emma"];
        const lastNames = ["Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];
        const streets = ["Maple", "Oak", "Pine", "Cedar", "Elm", "Birch", "Willow", "Spruce", "Cherry", "Walnut"];
        const departments = ["Marketing", "Sales", "HR", "IT", "Finance", "Operations", "Legal", "Engineering", "R&D", "Customer Support"];
        const designations = ["Manager", "Director", "Coordinator", "Technician", "Analyst", "Supervisor", "Consultant", "Developer", "Scientist", "Agent"];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomStreet = streets[Math.floor(Math.random() * streets.length)];
        const randomDept = departments[Math.floor(Math.random() * departments.length)];
        const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
        
        return {
            firstName: randomName,
            lastName: randomLastName,
            address: `${100 + i} ${randomStreet} Street`,
            mobile: `555-${1000 + i}`,
            email: `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
            department: randomDept,
            designation: randomDesignation,
            updated: {
                initial: randomName[0],
                color: ["#5c6bc0", "#26a69a", "#ef5350", "#1e88e5", "#ffa726"][Math.floor(Math.random() * 5)],
                date: "2024-03-08",
                time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}${Math.random() > 0.5 ? 'AM' : 'PM'}`
            },
            number: i + 1
        };
    });

    // inactive data
    const inactiveData = Array.from({ length: 10 }, (_, i) => {
        const names = ["Robert", "Patricia", "John", "Jennifer", "Richard", "Linda", "Thomas", "Elizabeth", "Charles", "Barbara"];
        const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
        const streets = ["Maple", "Oak", "Pine", "Cedar", "Elm", "Birch", "Willow", "Spruce", "Cherry", "Walnut"];
        const departments = ["Marketing", "Sales", "HR", "IT", "Finance", "Operations", "Legal", "Engineering", "R&D", "Customer Support"];
        const designations = ["Manager", "Director", "Coordinator", "Technician", "Analyst", "Supervisor", "Consultant", "Developer", "Scientist", "Agent"];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomStreet = streets[Math.floor(Math.random() * streets.length)];
        const randomDept = departments[Math.floor(Math.random() * departments.length)];
        const randomDesignation = designations[Math.floor(Math.random() * designations.length)];
        
        return {
            firstName: randomName,
            lastName: randomLastName,
            address: `${200 + i} ${randomStreet} Avenue`,
            mobile: `555-${2000 + i}`,
            email: `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
            department: randomDept,
            designation: randomDesignation,
            updated: {
                initial: randomName[0],
                color: ["#5c6bc0", "#26a69a", "#ef5350", "#1e88e5", "#ffa726"][Math.floor(Math.random() * 5)],
                date: "2024-02-15",
                time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}${Math.random() > 0.5 ? 'AM' : 'PM'}`
            },
            number: i + 1
        };
    });

    // deleted data 
    const deletedData = Array.from({ length: 5 }, (_, i) => {
        const names = ["Joseph", "Susan", "Mark", "Margaret", "Donald"];
        const lastNames = ["Anderson", "Thomas", "Jackson", "White", "Harris"];
        const streets = ["Maple", "Oak", "Pine", "Cedar", "Elm"];
        const departments = ["Marketing", "Sales", "HR", "IT", "Finance"];
        const designations = ["Manager", "Director", "Coordinator", "Technician", "Analyst"];
        
        const randomName = names[i];
        const randomLastName = lastNames[i];
        const randomStreet = streets[i];
        const randomDept = departments[i];
        const randomDesignation = designations[i];
        
        return {
            firstName: randomName,
            lastName: randomLastName,
            address: `${300 + i} ${randomStreet} Boulevard`,
            mobile: `555-${3000 + i}`,
            email: `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`,
            department: randomDept,
            designation: randomDesignation,
            updated: {
                initial: randomName[0],
                color: ["#5c6bc0", "#26a69a", "#ef5350", "#1e88e5", "#ffa726"][i],
                date: "2024-01-20",
                time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}${Math.random() > 0.5 ? 'AM' : 'PM'}`
            },
            number: i + 1
        };
    });

    // Module-specific data for other modules
    const moduleData = {
        core: {
            title: "Core Modules",
            description: "Essential system components and settings",
            columns: ["Module Name", "Version", "Status", "Last Updated", "Dependencies"],
            data: [
                { moduleName: "User Management", version: "3.2.1", status: "Active", lastUpdated: "2024-04-10", dependencies: "Authentication" },
                { moduleName: "Authentication", version: "2.5.0", status: "Active", lastUpdated: "2024-03-15", dependencies: "None" },
                { moduleName: "Notifications", version: "1.8.3", status: "Active", lastUpdated: "2024-05-01", dependencies: "User Management" },
                { moduleName: "File Storage", version: "4.0.2", status: "Active", lastUpdated: "2024-04-22", dependencies: "None" },
                { moduleName: "Reporting", version: "2.1.5", status: "Active", lastUpdated: "2024-03-30", dependencies: "Data Processing" }
            ]
        },
        procurement: {
            title: "Procurement Management",
            description: "Purchase orders, vendors, and requisitions",
            columns: ["Order ID", "Vendor", "Items", "Amount", "Status", "Order Date", "Delivery Date"],
            data: [
                { orderID: "PO-2024-001", vendor: "ABC Supplies", items: "Office Supplies", amount: "$1,250.00", status: "Delivered", orderDate: "2024-03-15", deliveryDate: "2024-03-22" },
                { orderID: "PO-2024-002", vendor: "Tech Solutions", items: "Computer Equipment", amount: "$5,780.00", status: "Processing", orderDate: "2024-04-10", deliveryDate: "2024-05-15" },
                { orderID: "PO-2024-003", vendor: "Furniture Plus", items: "Office Furniture", amount: "$3,200.00", status: "Pending", orderDate: "2024-05-01", deliveryDate: "2024-06-01" },
                { orderID: "PO-2024-005", vendor: "Paper Co.", items: "Printing Supplies", amount: "$1,800.00", status: "Shipped", orderDate: "2024-04-28", deliveryDate: "2024-05-10" }
            ]
        },
        inventory: {
            title: "Inventory Management",
            description: "Stock levels, locations, and movements",
            columns: ["Item ID", "Name", "Category", "Quantity", "Location", "Last Restocked", "Status"],
            data: [
                { itemID: "INV-1001", name: "Laptop Computers", category: "Electronics", quantity: "45", location: "Warehouse A", lastRestocked: "2024-04-15", status: "In Stock" },
                { itemID: "INV-1002", name: "Office Desks", category: "Furniture", quantity: "12", location: "Warehouse B", lastRestocked: "2024-03-20", status: "Low Stock" },
                { itemID: "INV-1003", name: "Printer Paper", category: "Office Supplies", quantity: "500", location: "Warehouse A", lastRestocked: "2024-05-01", status: "In Stock" },
                { itemID: "INV-1004", name: "Desk Chairs", category: "Furniture", quantity: "8", location: "Warehouse B", lastRestocked: "2024-04-10", status: "Low Stock" },
                { itemID: "INV-1005", name: "Ink Cartridges", category: "Office Supplies", quantity: "120", location: "Warehouse A", lastRestocked: "2024-04-25", status: "In Stock" }
            ]
        },
        manufacture: {
            title: "Manufacturing Operations",
            description: "Production schedules, work orders, and assembly lines",
            columns: ["Work Order", "Product", "Quantity", "Start Date", "End Date", "Status", "Assigned To"],
            data: [
                { workOrder: "WO-2024-101", product: "Product A", quantity: "500", startDate: "2024-04-10", endDate: "2024-04-20", status: "Completed", assignedTo: "Line 1" },
                { workOrder: "WO-2024-102", product: "Product B", quantity: "300", startDate: "2024-04-15", endDate: "2024-04-25", status: "In Progress", assignedTo: "Line 2" },
                { workOrder: "WO-2024-103", product: "Product C", quantity: "750", startDate: "2024-04-20", endDate: "2024-05-05", status: "In Progress", assignedTo: "Line 3" },
                { workOrder: "WO-2024-104", product: "Product D", quantity: "200", startDate: "2024-05-01", endDate: "2024-05-10", status: "Scheduled", assignedTo: "Line 1" },

            ]
        },
        sales: {
            title: "Sales Management",
            description: "Orders, customers, and revenue tracking",
            columns: ["Order ID", "Customer", "Products", "Amount", "Order Date", "Status", "Sales Rep"],
            data: [
                { orderID: "SO-2024-501", customer: "Acme Corp", products: "Product A, Product B", amount: "$5,250.00", orderDate: "2024-04-05", status: "Delivered", salesRep: "John Doe" },
                { orderID: "SO-2024-502", customer: "XYZ Industries", products: "Product C", amount: "$3,800.00", orderDate: "2024-04-12", status: "Shipped", salesRep: "Jane Smith" },
                { orderID: "SO-2024-503", customer: "Global Services", products: "Product A, Product D", amount: "$7,200.00", orderDate: "2024-04-18", status: "Processing", salesRep: "Robert Johnson" },
                { orderID: "SO-2024-504", customer: "Tech Solutions", products: "Product B", amount: "$2,500.00", orderDate: "2024-04-25", status: "Pending", salesRep: "Emily Davis" },
                { orderID: "SO-2024-505", customer: "Best Retailers", products: "Product E", amount: "$4,100.00", orderDate: "2024-05-01", status: "Processing", salesRep: "Michael Wilson" }
            ]
        },
        finance: {
            title: "Financial Management",
            description: "Accounting, invoices, and financial reports",
            columns: ["Invoice #", "Client", "Amount", "Issue Date", "Due Date", "Status", "Payment Method"],
            data: [
                { invoice: "INV-2024-1001", client: "Acme Corp", amount: "$5,250.00", issueDate: "2024-04-05", dueDate: "2024-05-05", status: "Paid", paymentMethod: "Bank Transfer" },
                { invoice: "INV-2024-1002", client: "XYZ Industries", amount: "$3,800.00", issueDate: "2024-04-12", dueDate: "2024-05-12", status: "Pending", paymentMethod: "Credit Card" },
                { invoice: "INV-2024-1003", client: "Global Services", amount: "$7,200.00", issueDate: "2024-04-18", dueDate: "2024-05-18", status: "Overdue", paymentMethod: "Check" },
                { invoice: "INV-2024-1004", client: "Tech Solutions", amount: "$2,500.00", issueDate: "2024-04-25", dueDate: "2024-05-25", status: "Pending", paymentMethod: "Bank Transfer" },
                { invoice: "INV-2024-1005", client: "Best Retailers", amount: "$4,100.00", issueDate: "2024-05-01", dueDate: "2024-06-01", status: "Paid", paymentMethod: "Credit Card" }
            ]
        },
        assets: {
            title: "Asset Management",
            description: "Equipment, properties, and asset tracking",
            columns: ["Asset ID", "Name", "Category", "Purchase Date", "Value", "Location", "Status"],
            data: [
                { assetID: "AST-1001", name: "Office Building A", category: "Real Estate", purchaseDate: "2020-05-15", value: "$1,250,000.00", location: "Downtown", status: "Active" },
                { assetID: "AST-1002", name: "Company Vehicles", category: "Transportation", purchaseDate: "2022-03-10", value: "$180,000.00", location: "Various", status: "Active" },
                { assetID: "AST-1003", name: "Manufacturing Equipment", category: "Machinery", purchaseDate: "2021-08-20", value: "$450,000.00", location: "Factory", status: "Active" },
                { assetID: "AST-1004", name: "IT Infrastructure", category: "Technology", purchaseDate: "2023-01-15", value: "$320,000.00", location: "Headquarters", status: "Active" },
                { assetID: "AST-1005", name: "Office Furniture", category: "Furniture", purchaseDate: "2022-11-05", value: "$85,000.00", location: "All Offices", status: "Active" }
            ]
        },
        services: {
            title: "Service Management",
            description: "Customer service, support tickets, and service delivery",
            columns: ["Ticket ID", "Customer", "Service Type", "Priority", "Status", "Created Date", "Assigned To"],
            data: [
                { ticketID: "TKT-2024-101", customer: "Acme Corp", serviceType: "Technical Support", priority: "High", status: "In Progress", createdDate: "2024-05-01", assignedTo: "John Smith" },
                { ticketID: "TKT-2024-102", customer: "XYZ Industries", serviceType: "Maintenance", priority: "Medium", status: "Open", createdDate: "2024-05-02", assignedTo: "Emily Johnson" },
                { ticketID: "TKT-2024-103", customer: "Global Services", serviceType: "Installation", priority: "Low", status: "Closed", createdDate: "2024-04-25", assignedTo: "Robert Davis" },
                { ticketID: "TKT-2024-104", customer: "Tech Solutions", serviceType: "Consultation", priority: "High", status: "Open", createdDate: "2024-05-03", assignedTo: "Sarah Wilson" },
                { ticketID: "TKT-2024-105", customer: "Best Retailers", serviceType: "Training", priority: "Medium", status: "Scheduled", createdDate: "2024-04-30", assignedTo: "Michael Brown" }
            ]
        },
        crm: {
            title: "Customer Relationship Management",
            description: "Contacts, leads, and customer interactions",
            columns: ["Contact ID", "Name", "Company", "Email", "Phone", "Status", "Last Contact"],
            data: [
                { contactID: "CRM-1001", name: "John Williams", company: "Acme Corp", email: "john.williams@acme.com", phone: "555-1234", status: "Active", lastContact: "2024-04-28" },
                { contactID: "CRM-1002", name: "Sarah Johnson", company: "XYZ Industries", email: "sarah.johnson@xyz.com", phone: "555-2345", status: "Lead", lastContact: "2024-05-01" },
                { contactID: "CRM-1004", name: "Emily Brown", company: "Tech Solutions", email: "emily.brown@tech.com", phone: "555-4567", status: "Inactive", lastContact: "2024-03-20" },
                { contactID: "CRM-1005", name: "Michael Davis", company: "Best Retailers", email: "michael.davis@best.com", phone: "555-5678", status: "Lead", lastContact: "2024-05-02" }
            ]
        },
        analytics: {
            title: "Analytics Dashboard",
            description: "Reports, metrics, and business intelligence",
            columns: ["Report ID", "Name", "Category", "Created By", "Last Run", "Frequency", "Status"],
            data: [
                { reportID: "RPT-2024-001", name: "Sales Performance", category: "Sales", createdBy: "John Doe", lastRun: "2024-05-01", frequency: "Daily", status: "Active" },
                { reportID: "RPT-2024-003", name: "Financial Summary", category: "Finance", createdBy: "Robert Johnson", lastRun: "2024-04-30", frequency: "Weekly", status: "Active" },
                { reportID: "RPT-2024-004", name: "Customer Engagement", category: "CRM", createdBy: "Emily Davis", lastRun: "2024-04-28", frequency: "Weekly", status: "Active" },
            ]
        }
    };

    // Current data category
    let currentData = activeData;
    let currentCategory = 'active';
    let currentModule = 'admin';

    // Function to generate the original admin table structure
    function generateAdminTable() {
        const mainContent = document.querySelector('.main-content');
        
        // Create the original table structure
        const tableHTML = `
            <div class="tabs">
                <div class="tab">
                    <i class="fas fa-file-alt"></i>
                    Drafts <span class="count">30</span> 
                </div>
                <div class="tab active">
                    <i class="fas fa-chart-line"></i>
                    Active <span class="count">12</span>
                </div>
                <div class="tab">
                    <i class="far fa-square"></i>
                    Inactive <span class="count">10</span>
                </div>
                <div class="tab">
                    <i class="fas fa-trash-alt"></i>
                    Deleted <span class="count">5</span>
                </div>
                
                <div class="search-container">
                    <i class="fas fa-filter"></i>
                    <input type="text" placeholder="Search" class="search-input">
                </div>
                
                <div class="pagination">
                    <button class="pagination-btn"><i class="fas fa-angle-double-left"></i></button>
                    <button class="pagination-btn"><i class="fas fa-angle-left"></i></button>
                    <button class="pagination-btn active">1</button>
                    <button class="pagination-btn">2</button>
                    <button class="pagination-btn">3</button>
                    <span>...</span>
                    <button class="pagination-btn"><i class="fas fa-angle-right"></i></button>
                    <button class="pagination-btn"><i class="fas fa-angle-double-right"></i></button>
                    <button class="pagination-btn"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Updated</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        `;
        
        // Update the main content
        mainContent.innerHTML = tableHTML;
        
        // Generate table rows
        generateTableRows(currentData);
        
        // Add event listeners to the tabs
        setupAdminTabListeners();
        
        // Add event listener to the search input
        setupAdminSearchListener();

        

    }

    // Function to generate table rows from data
    function generateTableRows(data) {
        const tableBody = document.querySelector('.data-table tbody');
        if (!tableBody) return; 
        
        tableBody.innerHTML = ''; 
        
        data.forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.address}</td>
                <td>${employee.mobile}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td>${employee.designation}</td>
                <td>
                    <div class="updated-info">
                        <div class="avatar" style="background-color: ${employee.updated.color};">${employee.updated.initial}</div>
                        <div class="timestamp">
                            <div>${employee.updated.date}</div>
                            <div>${employee.updated.time}</div>
                        </div>
                    </div>
                </td>
                <td>${employee.number}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to setup admin tab listeners
    function setupAdminTabListeners() {
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Update current data based on selected tab
                switch(index) {
                    case 0: 
                        currentData = draftData;
                        currentCategory = 'draft';
                        break;
                    case 1: 
                        currentData = activeData;
                        currentCategory = 'active';
                        break;
                    case 2: 
                        currentData = inactiveData;
                        currentCategory = 'inactive';
                        break;
                    case 3: 
                        currentData = deletedData;
                        currentCategory = 'deleted';
                        break;
                }
                
                // Generate table with selected data
                generateTableRows(currentData);
                
                // Clear search input
                document.querySelector('.search-input').value = '';
            });
        });
        
        // Pagination functionality
        const paginationButtons = document.querySelectorAll('.pagination-btn');
        
        paginationButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Skip if it's a navigation button (has an icon)
                if (!this.querySelector('i')) {
                    // Remove active class from all pagination buttons
                    paginationButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                }
            });
        });
    }

    // Function to setup admin search listener
    function setupAdminSearchListener() {
        const searchInput = document.querySelector('.search-input');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                // Filter the current data category based on search term
                const filteredData = currentData.filter(employee => {
                    return (
                        employee.firstName.toLowerCase().includes(searchTerm) ||
                        employee.lastName.toLowerCase().includes(searchTerm) ||
                        employee.email.toLowerCase().includes(searchTerm) ||
                        employee.department.toLowerCase().includes(searchTerm) ||
                        employee.designation.toLowerCase().includes(searchTerm) ||
                        employee.address.toLowerCase().includes(searchTerm)
                    );
                });
                
                // Regenerate table with filtered data
                generateTableRows(filteredData);
            });
        }
    }

    // Function to generate module-specific table
    function generateModuleTable(moduleKey) {
        const module = moduleData[moduleKey];
        const mainContent = document.querySelector('.main-content');
        
        // Update page title and description
        const pageHeader = `
            <div class="module-header">
                <h1>${module.title}</h1>
                <p>${module.description}</p>
            </div>
        `;
        
        // Create table headers based on module columns
        const tableHeaders = module.columns.map(col => `<th>${col}</th>`).join('');
        
        // Create table rows based on module data
        const tableRows = module.data.map(item => {
            const cells = Object.values(item).map(value => `<td>${value}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        
        // Build the complete table HTML
        const tableHTML = `
            <div class="tabs">
                <div class="tab active">
                    <i class="fas fa-list"></i>
                    All Items <span class="count">${module.data.length}</span>
                </div>
                <div class="search-container">
                    <i class="fas fa-filter"></i>
                    <input type="text" placeholder="Search" class="search-input">
                </div>
                <div class="pagination">
                    <button class="pagination-btn"><i class="fas fa-angle-double-left"></i></button>
                    <button class="pagination-btn"><i class="fas fa-angle-left"></i></button>
                    <button class="pagination-btn active">1</button>
                    <button class="pagination-btn">2</button>
                    <button class="pagination-btn">3</button>
                    <span>...</span>
                    <button class="pagination-btn"><i class="fas fa-angle-right"></i></button>
                    <button class="pagination-btn"><i class="fas fa-angle-double-right"></i></button>
                    <button class="pagination-btn"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>${tableHeaders}</tr>
                    </thead>
                    <tbody>${tableRows}</tbody>
                </table>
            </div>
        `;
        
        // Update the main content
        mainContent.innerHTML = pageHeader + tableHTML;
        
        // Add event listeners to the new search input
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                // Filter the module data based on search term
                const filteredData = module.data.filter(item => {
                    return Object.values(item).some(value => 
                        value.toString().toLowerCase().includes(searchTerm)
                    );
                });
                
                // Regenerate table rows with filtered data
                const tableBody = document.querySelector('.data-table tbody');
                tableBody.innerHTML = filteredData.map(item => {
                    const cells = Object.values(item).map(value => `<td>${value}</td>`).join('');
                    return `<tr>${cells}</tr>`;
                }).join('');
            });
        }
    }
    
    // Update tab counts
    function updateTabCounts() {
        const tabs = document.querySelectorAll('.tab');
        if (tabs.length >= 4) {
            tabs[0].querySelector('.count').textContent = draftData.length;
            tabs[1].querySelector('.count').textContent = activeData.length;
            tabs[2].querySelector('.count').textContent = inactiveData.length;
            tabs[3].querySelector('.count').textContent = deletedData.length;
        }
    }
    
    // Generate admin table on page load
    generateAdminTable();
    updateTabCounts();

    // Sidebar item selection
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove active class from all sidebar items
            sidebarItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get module key based on index
            const moduleKeys = ['admin', 'core', 'procurement', 'inventory', 'manufacture', 'sales', 'finance', 'assets', 'services', 'crm', 'analytics'];
            const moduleKey = moduleKeys[index];
            
            if (moduleKey) {
                currentModule = moduleKey;
                
                // Special handling for admin module to keep original UI
                if (moduleKey === 'admin') {
                    generateAdminTable();
                } else if (moduleData[moduleKey]) {
                    generateModuleTable(moduleKey);
                }
            }
        });
    });


    // Helper function to toggle dropdowns
    function toggleDropdown(element) {
        // Close all other dropdowns first
        document.querySelectorAll('.user-dropdown, .notification-dropdown, .settings-panel').forEach(dropdown => {
            if (dropdown !== element) {
                dropdown.classList.remove('show-dropdown');
            }
        });
        
        // Toggle the clicked dropdown
        element.classList.toggle('show-dropdown');
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const userAvatar = document.getElementById('userAvatar');
        const notificationIcon = document.getElementById('notificationIcon');
        const settingsIcon = document.getElementById('settingsIcon');
        
        if (!userAvatar.contains(event.target) && 
            !notificationIcon.contains(event.target) && 
            !settingsIcon.contains(event.target)) {
            document.querySelectorAll('.user-dropdown, .notification-dropdown, .settings-panel').forEach(dropdown => {
                dropdown.classList.remove('show-dropdown');
            });
        }
    });

    // User Avatar Dropdown
    const userAvatar = document.getElementById('userAvatar');
    const userDropdown = document.querySelector('.user-dropdown');
    
    userAvatar.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(userDropdown);
    });

    // Notification Dropdown
    const notificationIcon = document.getElementById('notificationIcon');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    
    notificationIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(notificationDropdown);
    });

    // Settings Panel
    const settingsIcon = document.getElementById('settingsIcon');
    const settingsPanel = document.querySelector('.settings-panel');

   // Initialize settings elements
const fontSizeSelect = document.getElementById('fontSizeSelect');
const languageSelect = document.getElementById('languageSelect');
const emailNotifications = document.querySelector('.settings-panel input[type="checkbox"]:nth-of-type(1)');
const systemAlerts = document.querySelector('.settings-panel input[type="checkbox"]:nth-of-type(2)');

// Load saved settings
if (localStorage.getItem('fontSize')) {
    const savedFontSize = localStorage.getItem('fontSize');
    fontSizeSelect.value = savedFontSize;
    applyFontSize(savedFontSize);
}

if (localStorage.getItem('language')) {
    languageSelect.value = localStorage.getItem('language');
}

if (localStorage.getItem('emailNotifications') !== null) {
    emailNotifications.checked = localStorage.getItem('emailNotifications') === 'true';
}

if (localStorage.getItem('systemAlerts') !== null) {
    systemAlerts.checked = localStorage.getItem('systemAlerts') === 'true';
}

// Apply font size function
function applyFontSize(size) {
    let rootFontSize;
    switch(size) {
        case 'small':
            rootFontSize = '14px';
            break;
        case 'medium':
            rootFontSize = '16px';
            break;
        case 'large':
            rootFontSize = '18px';
            break;
        default:
            rootFontSize = '16px';
    }
    document.documentElement.style.fontSize = rootFontSize;
}

// Prevent settings panel from closing when clicking inside it
settingsPanel.addEventListener('click', function(event) {
    event.stopPropagation();
});
    
    settingsIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(settingsPanel);

        
    if (!fontSizeSelect.hasSettingsListener) {
        fontSizeSelect.addEventListener('change', function() {
            const selectedSize = this.value;
            applyFontSize(selectedSize);
            localStorage.setItem('fontSize', selectedSize);
        });
        fontSizeSelect.hasSettingsListener = true;
    }
    
    if (!languageSelect.hasSettingsListener) {
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            alert(`Language changed to ${selectedLanguage === 'en' ? 'English' : 'Sinhala'}`);
        });
        languageSelect.hasSettingsListener = true;
    }
    
    if (!emailNotifications.hasSettingsListener) {
        emailNotifications.addEventListener('change', function() {
            localStorage.setItem('emailNotifications', this.checked);
        });
        emailNotifications.hasSettingsListener = true;
    }
    
    if (!systemAlerts.hasSettingsListener) {
        systemAlerts.addEventListener('change', function() {
            localStorage.setItem('systemAlerts', this.checked);
        });
        systemAlerts.hasSettingsListener = true;
    }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Store user preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    document.querySelector(".home-icon").addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("Welcome to eZuite!");
    });
    


      
});