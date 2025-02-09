// Draggable video frame
const videoContainer = document.getElementById('draggable-video');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Event untuk drag dengan mouse dan touch
const startDrag = (e) => {
  isDragging = true;
  offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - videoContainer.offsetLeft;
  offsetY = (e.touches ? e.touches[0].clientY : e.clientY) - videoContainer.offsetTop;
};

const moveDrag = (e) => {
  if (isDragging) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    videoContainer.style.left = `${clientX - offsetX}px`;
    videoContainer.style.top = `${clientY - offsetY}px`;
  }
};

const stopDrag = () => {
  isDragging = false;
};

// Event listener drag
videoContainer.addEventListener('mousedown', startDrag);
videoContainer.addEventListener('touchstart', startDrag, { passive: true });
document.addEventListener('mousemove', moveDrag);
document.addEventListener('touchmove', moveDrag, { passive: true });
document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

// Close button handler
document.getElementById('close-button').addEventListener('click', () => {
  videoContainer.style.display = 'none';
});

// Resize handler
const resizeHandle = document.querySelector('.resize-handle');
let isResizing = false;

const startResize = (e) => {
  e.stopPropagation();
  isResizing = true;
};

const moveResize = (e) => {
  if (isResizing) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const newWidth = clientX - videoContainer.offsetLeft;
    const newHeight = clientY - videoContainer.offsetTop;

    if (newWidth > 150 && newHeight > 100) {
      videoContainer.style.width = `${newWidth}px`;
      videoContainer.style.height = `${newHeight}px`;
    }
  }
};

const stopResize = () => {
  isResizing = false;
};

// Event listener resize
resizeHandle.addEventListener('mousedown', startResize);
resizeHandle.addEventListener('touchstart', startResize, { passive: true });
document.addEventListener('mousemove', moveResize);
document.addEventListener('touchmove', moveResize, { passive: true });
document.addEventListener('mouseup', stopResize);
document.addEventListener('touchend', stopResize);


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
