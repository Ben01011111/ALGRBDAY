var i = 0;
var txt = 'Happy 20th Birthday to my favorite hooman!! Wishing you a <br> Good health, Love, Patience and Fortune for this phase of your life..<br><br>More opportunities, knowledge, ideas, experiences you can gain this year. <br> I’m very thankful to God that you exist in this world ;> <br><br> para more lamons and laags to come this year hahaha <br>  kay basi next time sa gawas bansa na ta makalaag sunod haha <br> in God’s time lang jud! <br><br> Di na ko mag LSM kay basi ma jinx mga plano ko saaton both <br> HAHAHAHA <br><br> so happy birthday ulit Alodia Louise my bebiii! enjoy ur day <br> and spend time with your love one’s! <br><br> Love, Ben Franklin <3 <br>';
var speed = 50;
var isTypingDone = false; // Global variable to track typing status

function typeWriter() {
  if (!isTypingDone) {
    if (i < txt.length) {
      if (txt.charAt(i) === '<') {
        const tagEnd = txt.indexOf('>', i) + 1; // Find the end of the tag
        document.getElementById("demo").innerHTML += txt.substring(i, tagEnd);
        i = tagEnd; // Move index to after the tag
      } else {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
      }
      setTimeout(typeWriter, speed); // Schedule the next character
    } else {
      isTypingDone = true; // Set the flag to true once done
    }
  }
}
