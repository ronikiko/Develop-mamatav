// Quick an dirty script that sends and receives messages from the server in real-time.
// Just kidding. It a simple script that duplicates the first message and changes its content.
const historyNode = document.querySelector('.Chat-main');
const inputNode = document.querySelector('#new-msg');

inputNode.addEventListener('keydown', event => {

    // on any key other than Enter, continue as normal
    //if (event.keyCode !== 13 ) return;
   let msgNode = '';

    if (event.keyCode === 17) {
         msgNode = historyNode.querySelector('.Message--in').cloneNode(true);
    }
    else if ( event.keyCode === 13 ) {
        // on Enter key pressed, clone the first message, change its content and prepend
         msgNode = historyNode.querySelector('.Message--out').cloneNode(true);
    } else {
        
        return;
    }
    
    event.preventDefault();

    msgNode.querySelector('.Message-content').textContent = event.target.value;

    historyNode.prepend(msgNode);

    event.target.value = '';

    // requestAnimationFrame(() => {
    //     historyNode.scrollTo({
    //         top: historyNode.scrollHeight,
    //         behavior: 'smooth'
    //     });
    // });
});

// fake chatTabs

const users = [
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Fidela Larrimore',
        online: false
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        name: 'Melynda Ohlson',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        name: 'Nathan Hollenbeck',
        online: false
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Jamie Duca',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Clyde Hosford',
        online: false
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Milo Saylors',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Shizue Inge',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
        name: 'Maya Firth',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Taunya Lugar',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Dakota Bill',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'Kera Schulte',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Fidela Larrimore',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        name: 'Melynda Ohlson',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        name: 'Nathan Hollenbeck',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Jamie Duca',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Clyde Hosford',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Milo Saylors',
        online: false
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Shizue Inge',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
        name: 'Maya Firth',
        online: false
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Taunya Lugar',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Dakota Bill',
        online: true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'Kera Schulte',
        online: false
    }
];



// writen by roni kiko (RK)
const chatTabs = document.querySelector('.ChatTabs');
const chatTab = chatTabs.firstElementChild;

users.forEach(user => {
    const node = chatTab.cloneNode( true );
    node.querySelector('img').src = user.avatar;
    node.querySelector('.ChatTab-name').textContent = user.name;
    chatTabs.appendChild(node);
});


// Change the main avatar img by click on side menu image
 const avatar = document.querySelectorAll( '.Avatar' );
 // Select the avate image
 const mainAvatar = document.querySelector( '#main-avatar' );
 // Selct the main avatar name
 const  name = document.querySelector( '.UserInfo-name' );

// Selecting all the users name
 const avatrName = document.querySelectorAll( '.ChatTab-name' );

 const isOnline = document.querySelector('.UserInfo-status');

avatar.forEach( ( ava, i ) => {
    ava.addEventListener('click', function(){
         mainAvatar.setAttribute('src', this.src);
         name.textContent = avatrName[i - 1].innerHTML;
        // checking to see if a iser is onlie or not and print it to the screen!!!
     const ifOnline =  (users[i - 1].online) ? isOnline.textContent = 'Online' : isOnline.textContent = 'Out';
    });
});


 
