document.getElementById('resumeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const dno = document.getElementById('dno').value;
  const area = document.getElementById('area').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const num = document.getElementById('num').value;
  const email = document.getElementById('email').value;
  const education= document.getElementById('education').value;
  const edu = document.getElementById('edu').value;
  const ed = document.getElementById('ed').value;
  const tech =document.getElementById('tech').value;
  const experience = document.getElementById('experience').value;
  const f=document.getElementById('f').value;
  const d=document.getElementById('d').value;
  const n=document.getElementById('n').value;
  const ms = document.getElementById('ms').value;
  const gen=document.getElementById('gen').value;
  const l=document.getElementById('l').value;
  const s=document.getElementById('s').value;



  const resumeOutput = document.getElementById('resumeOutput');
  resumeOutput.innerHTML = `
 <center> <h1>RESUME</h1></center>
 <div class="resume-section">
 <p> <strong>${fullName}</strong></p>
 <p>house:${dno},${area}</p>
 <p>${address}</p>
 <p>${city}</P>
 <p>${num}</p>
 <p>Email: ${email}</p>
</div><hr><hr>
<h3>carrer objective:</h3>
  <p> Aiming to achieve a challenging and professional position from where i can make a significate contribution to the organization on the form of my declaration by using all my skills</p>
    <hr><hr>  <div class="resume-section">
        <h3>Education:</h3>
        <ul>
       <li> <p>10<sup>th</sup> passed with${education}%</p></li>
       <li><p>12<sup>th</sup> passed with${edu}%</p></li>
       <li><p> B.tech passed with${ed}%</p></li>
       <ul>
      </div><hr><hr>
      <div class="resume-section">
      <h3>Technical Qualification:</h3>
      <p>${tech}</p>
      </div><hr><hr>
    
<div class="resume-section">
 <h3>Work Experience</h3>
 <p>${experience}</p>
</div>
<hr><hr>
<div class="resume-section">
<h3>Personal Details:</h3>
<ul>
<li><p>Father Name:${f}</p></li>
<li><p>Date of Birth:${d}</p></li>
<li><p>Nationality:${n}</p></li>
<li><p>Gender:${gen}</p></li>
<li><p>Marital-status:${ms}</p></li>
<li><p>Languages known:${l}</p></li>
<li><p>Skills:${s}</p></li>
</ul>
</div><hr><hr>
<div class="resume-section">
<h3>Declaration:</h3>
<p>I hearby declare that every information is true and i am solely responsible for it's authenticity</p>
 </div>


`;
});
