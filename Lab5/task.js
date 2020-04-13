const container = document.getElementById("container");
const loading = document.getElementById("loading");
let isLoading = false;



function httpGet(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response)
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}

function LoadUsers(num) {
    return httpGet('https://randomuser.me/api/?results=' + num)
        .then(response => {
            let users = JSON.parse(response);
            return users;
        })
        .then(users => {
            // console.log(users);
            return users;
        })
        .catch(error => {
            console.log(error);
        });
}

function main() {
    LoadUsers(50)
        .then(users => {
            let page = document.createElement("div");
            page.className = 'page';
            users.results.forEach(user => {
                let img = new Image();
                img.src = user.picture.large;
                img.className = 'profile-image';
                page.appendChild(img);
            });
            container.appendChild(page);
        })

}
main();

window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    if ((offset >= height) && (!isLoading)) {
        loading.style.display = 'block';
        isLoading = true;
        LoadUsers(25)
            .then(users => {
                setTimeout(() => {
                    loading.style.display = 'none';
                    isLoading = false;
                    let page = document.createElement("div");
                    page.className = 'page';
                    users.results.forEach(user => {
                        let img = new Image();
                        img.src = user.picture.large;
                        img.className = 'profile-image';
                        page.appendChild(img);
                    });
                    container.appendChild(page);
                }, 1000);;
            }).catch(error => {
                console.log(error);
            });
    }
};