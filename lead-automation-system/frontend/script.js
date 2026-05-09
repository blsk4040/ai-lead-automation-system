const leadForm = document.getElementById("leadForm");
const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");

const N8N_WEBHOOK_URL = "http://localhost:5678/webhook/lead-capture";

leadForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  statusMessage.textContent = "";
  statusMessage.className = "status";
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const formData = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    company: document.getElementById("company").value.trim(),
    service: document.getElementById("service").value,
    message: document.getElementById("message").value.trim(),
    source: "AI Lead Automation System Website",
    submittedAt: new Date().toISOString()
  };

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error("Failed to submit lead");
    }

    statusMessage.textContent = "Lead submitted successfully. Check n8n.";
    statusMessage.classList.add("success");

    leadForm.reset();
  } catch (error) {
    console.error("Submission error:", error);

    statusMessage.textContent = "Something went wrong. Make sure n8n webhook is listening.";
    statusMessage.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Lead";
  }
});