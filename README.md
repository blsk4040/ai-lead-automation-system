# AI Lead Automation System

A production-ready lead capture and qualification system built with HTML, CSS, JavaScript, n8n, and Zoho CRM.

This project captures leads from a website form, applies business logic to identify high-intent prospects, and automatically creates qualified leads in Zoho CRM.

---

## 🚀 Overview

The AI Lead Automation System eliminates manual data entry by connecting a custom website lead form to n8n and Zoho CRM.

When a prospect submits the form:

1. The website sends the lead data to an n8n production webhook.
2. n8n normalizes the incoming data.
3. Conditional logic identifies automation-related enquiries.
4. High-value leads are assigned a score and priority.
5. Zoho CRM automatically creates a new lead record.

---

## 🏗️ Architecture

```text
Website Lead Form
        ↓
n8n Production Webhook
        ↓
Normalize Lead Data
        ↓
IF Logic (Detect Automation Services)
        ↓
Set Hot Lead Score & Priority
        ↓
Zoho CRM Lead Creation
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Fetch API)
* n8n
* Zoho CRM
* OAuth 2.0
* Webhooks

---

## ✨ Features

* Responsive lead capture form
* Production webhook integration
* Automatic lead qualification
* Hot lead scoring
* Priority assignment
* Automated Zoho CRM lead creation
* OAuth-secured API connection
* Real-time status messages

---

## 📁 Project Structure

```text
ai-lead-automation-system/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── workflow/
│   └── ai-lead-automation-workflow.json
├── screenshots/
│   ├── website-form.png
│   ├── n8n-workflow.png
│   └── zoho-crm-lead.png
└── README.md
```

---

## 🌐 Frontend Workflow

The frontend collects:

* Full Name
* Email Address
* Phone Number
* Company Name
* Service Required
* Message

The data is sent to:

```javascript
http://localhost:5678/webhook/lead-capture
```

---

## ⚙️ n8n Workflow Logic

### 1. Webhook

Receives POST requests from the website.

### 2. Normalize Lead Data

Extracts and standardizes the required fields.

### 3. IF Logic

Checks whether the selected service contains terms such as:

* Automation
* AI Workflow Automation
* Zoho CRM Automation

### 4. Set Hot Lead

Adds:

* `leadStatus = Hot`
* `leadScore = 90`
* `priority = High`
* `nextAction = Contact lead within 15 minutes`

### 5. Zoho CRM

Creates a new lead automatically.

---

## 🧾 Zoho CRM Fields Mapped

| Zoho CRM Field | Source              |
| -------------- | ------------------- |
| Last Name      | Full Name           |
| Company        | Company             |
| Email          | Email               |
| Phone          | Phone               |
| Lead Source    | n8n Test Automation |
| Description    | Message             |

---

## 📈 Business Value

This system helps businesses:

* Capture website enquiries automatically
* Eliminate manual CRM data entry
* Prioritize high-value leads
* Improve sales response times
* Standardize lead intake

---

## 🧠 Skills Demonstrated

* Workflow Automation
* API Integration
* Webhooks
* OAuth 2.0 Authentication
* CRM Automation
* Lead Scoring Logic
* JavaScript Form Submission
* Production Deployment

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/blsk4040/ai-lead-automation-system.git
cd ai-lead-automation-system
```

### 2. Start n8n

```bash
n8n
```

### 3. Import Workflow

Import:

```text
workflow/ai-lead-automation-workflow.json
```

### 4. Configure Zoho CRM Credentials

Create OAuth credentials in n8n and connect your Zoho CRM account.

### 5. Open Frontend

Open:

```text
frontend/index.html
```

---

## 📸 Screenshots

Add screenshots to the `screenshots/` folder:

* Website lead form
* n8n workflow
* Zoho CRM lead record

---

## 🚀 Future Enhancements

* AI-generated lead summaries
* WhatsApp notifications
* Email alerts
* Appointment booking automation
* CRM task creation
* Proposal generation

---

## 💼 Real-World Use Case

This system can be used by service businesses and agencies such as NewHaus IT Services (NHX) to automate lead capture and qualification from their website.

---

## 👤 Author

Andrew Boakye

* LinkedIn: https://www.linkedin.com/in/andrew-boakye-gh
* GitHub: https://github.com/blsk4040
* Website: https://nhx.co.za

---

## 📄 License

This project is licensed under the MIT License.
