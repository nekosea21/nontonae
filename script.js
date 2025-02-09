// Draggable video frame
const videoContainer = document.getElementById('draggable-video');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

videoContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    videoContainer.style.left = `${e.pageX - offsetX}px`;
    videoContainer.style.top = `${e.pageY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Close button handler
document.getElementById('close-button').addEventListener('click', () => {
  videoContainer.style.display = 'none';
});

// Handle klik button GTV
document.getElementById('gtv-button').addEventListener('click', function () {
    document.getElementById('video-frame').src =
      'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGZ3R2JTJGaW5ld3NpZCZoZWlnaHQ9MTAwJTI1JndpZHRoPTEwMCUyNQ==';
    videoContainer.style.display = 'block';
});

// Handle klik button RCTI
document.getElementById('rcti-button').addEventListener('click', function () {
    document.getElementById('video-frame').src =
      'https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGcmN0aSUyRmluZXdzaWQmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=';
    videoContainer.style.display = 'block';
});

// Handle klik button trans7
document.getElementById('trans7-button').addEventListener('click', function () {
  document.getElementById('video-frame').src =
    'https://20.detik.com/watch/livestreaming-trans7';
  videoContainer.style.display = 'block';
});

// Resize handler
const resizeHandle = document.querySelector('.resize-handle');
let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  e.stopPropagation();
  isResizing = true;
});

document.addEventListener('mousemove', (e) => {
  if (isResizing) {
    const newWidth = e.pageX - videoContainer.offsetLeft;
    const newHeight = e.pageY - videoContainer.offsetTop;

    if (newWidth > 150 && newHeight > 100) { // Minimum ukuran biar nggak ngecil banget
      videoContainer.style.width = `${newWidth}px`;
      videoContainer.style.height = `${newHeight}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  isResizing = false;
});
