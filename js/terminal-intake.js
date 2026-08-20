/* ==========================================================================
   BIKRAM GORAI — TERMINAL INTAKE FORM LOGIC (FORMSPREE REAL INBOX & SVG ANIMATION)
   Interactive Command Line Contact Form with Selectable Tags, Formspree Endpoint,
   and 0.5x Speed SVG Mailbox-to-Airplane Animated Dispatch Overlay
   ========================================================================== */

function initTerminalIntake() {
  const terminalForm = document.getElementById('terminal-intake-form');
  if (!terminalForm) return;

  const hiddenTypeInput = document.getElementById('hidden-conversation-type');
  const hiddenFocusInput = document.getElementById('hidden-primary-focus');

  const overlay = document.getElementById('send-animation-overlay');
  const svgImg = document.getElementById('send-message-svg-img');
  const statusTitle = document.getElementById('send-status-title');
  const statusSub = document.getElementById('send-status-sub');

  // Handle Pill Selectors
  const pillGroups = document.querySelectorAll('.pill-selector-group');

  pillGroups.forEach(group => {
    const pills = group.querySelectorAll('.pill-option');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        // Toggle single active state in group
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Sync to hidden inputs for Formspree submission
        if (group.id === 'group-type' && hiddenTypeInput) {
          hiddenTypeInput.value = pill.dataset.value;
        }
        if (group.id === 'group-focus' && hiddenFocusInput) {
          hiddenFocusInput.value = pill.dataset.value;
        }
      });
    });
  });

  // Handle Form Submission with 0.5x Speed Mailbox to Airplane Animation
  terminalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('terminal-name');
    const messageInput = document.getElementById('terminal-message');
    const emailInput = document.getElementById('terminal-email');
    const submitBtn = document.getElementById('terminal-submit-btn');
    const noteElement = document.getElementById('terminal-status-note');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      if (noteElement) {
        noteElement.textContent = 'ERROR: PLEASE FILL IN ALL REQUIRED FIELDS.';
        noteElement.style.color = '#B24726';
      }
      return;
    }

    // 1. Activate Animated Dispatch Overlay & Reload SVG to restart 0.5x animation
    if (overlay && svgImg) {
      svgImg.src = 'assets/images/send-message.svg?t=' + Date.now();
      overlay.classList.add('active');
    }

    // 2. UI Status Stepper (Calibrated for 0.5x Speed Animation)
    if (statusTitle && statusSub) {
      statusTitle.textContent = '[1/3] PACKAGING MAILBOX...';
      statusSub.textContent = 'GUEST@BIKRAM:~$ INITIATING TRANSMISSION';
    }

    setTimeout(() => {
      if (statusTitle && statusSub) {
        statusTitle.textContent = '[2/3] MORPHING TO AIRPLANE...';
        statusSub.textContent = 'GUEST@BIKRAM:~$ CONVERTING TO FLIGHT PROTOCOL';
      }
    }, 1400);

    setTimeout(() => {
      if (statusTitle && statusSub) {
        statusTitle.textContent = '[3/3] MISSION DISPATCHED! ✓';
        statusSub.textContent = 'GUEST@BIKRAM:~$ LANDED IN BIKRAM REAL INBOX';
      }
    }, 3200);

    // 3. Send Formspree Payload via AJAX Fetch in parallel
    submitBtn.disabled = true;
    submitBtn.textContent = 'TRANSMITTING...';

    try {
      const formData = new FormData(terminalForm);
      formData.append('_replyto', emailInput.value.trim());
      formData.append('email', emailInput.value.trim());

      const fetchPromise = fetch(terminalForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Wait for 0.5x speed animation sequence duration (4.2s) and fetch completion
      const [response] = await Promise.all([
        fetchPromise,
        new Promise(resolve => setTimeout(resolve, 4200))
      ]);

      if (response.ok) {
        // Fade out overlay smoothly
        if (overlay) {
          overlay.classList.remove('active');
        }

        submitBtn.textContent = 'MISSION SENT ✓';
        submitBtn.style.backgroundColor = '#2E7D32';
        submitBtn.style.borderColor = '#2E7D32';
        submitBtn.style.color = '#FFFFFF';

        if (noteElement) {
          noteElement.textContent = `SUCCESS: DISPATCHED TO BIKRAM GORAI REAL INBOX!`;
          noteElement.style.color = '#2E7D32';
        }

        // Reset form fields after 4 seconds
        setTimeout(() => {
          terminalForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'SEND MISSION →';
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = '';
          if (noteElement) {
            noteElement.textContent = 'YOUR MESSAGE, STRAIGHT TO MY INBOX.';
            noteElement.style.color = '';
          }
        }, 4000);
      } else {
        throw new Error('Formspree response not OK');
      }
    } catch (err) {
      if (overlay) {
        overlay.classList.remove('active');
      }
      submitBtn.disabled = false;
      submitBtn.textContent = 'RETRY MISSION →';
      if (noteElement) {
        noteElement.textContent = 'ERROR: DISPATCH FAILED. PLEASE CHECK YOUR NETWORK OR EMAIL DIRECTLY.';
        noteElement.style.color = '#B24726';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initTerminalIntake);
