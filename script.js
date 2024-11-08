document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookIssueForm")?.addEventListener("submit", function(event) {
        const bookName = document.getElementById("bookName")?.value;
        if (!bookName) {
            alert("Please enter the book name.");
            event.preventDefault();
        }
    });

    document.getElementById("membershipDuration")?.value = "6 months";

    document.getElementById("returnBookForm")?.addEventListener("submit", function(event) {
        const finePaid = document.getElementById("finePaid")?.checked;
        const fineAmount = parseFloat(document.getElementById("fineAmount")?.value || "0");
        
        if (fineAmount > 0 && !finePaid) {
            alert("Please pay the fine before returning the book.");
            event.preventDefault();
        }
    });
});