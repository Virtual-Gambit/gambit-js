# Gambit - React

## Install Mac OSX Big Sur Prerequisites

### Homebrew

#### Install Homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`


#### Update & Doctor Homebrew

```
brew update \
&& brew doctor
```

#### Add Homebrew Path

Open ZSHRC file

`sudo nano ~/.zshrc`

Paste the following at the bottom:

```
# Configuration for python
export PATH="/usr/local/bin:$PATH"
```

Activate Path

`source ~/.zshrc`

### Python3

Install Python

`brew install python3`

### VirtualEnv

Install VirtualEnv

`pip3 install virtualenv`

Create VirtualEnv directory

`mkdir ~/.virtualenvs`

##### Add VirtualEnv Path

Open ZSHRC file

`sudo nano ~/.zshrc`

Paste the following at the bottom:

```
# Configuration for virtualenv
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV=/usr/local/bin/virtualenv
source /usr/local/bin/virtualenvwrapper.sh
export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES
```

Activate VirtualEnv

`source ~/.zshrc`

### Redis

Install Redis

`brew install redis`

Start/Stop Redis Services

`brew services start redis`

`brew services stop redis`

`export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES`

### Node & NPM

Install Node 10

`brew install node@10`


### Clone

```
git clone https://Harpangell@bitbucket.org/angellenterprises/gambit-admin.git
&& cd gambit-admin \
&& git clone https://Harpangell@bitbucket.org/angellenterprises/gambitkeys.git
```

### Local Dev Build NO Docker

Make VirtualEnv & Install

```
&& mkvirtualenv gambitnet \
&& cd gambit-admin \
&& pip3 install -U -r requirements.txt
```

### Dev Key MANUAL

`export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/gambitkeys/server-env/development/firestore/credentials.json"`


#### Server

Enter Main Dir:

`cd server`

```
python3 wsgi.py
```

#### Celery

Enter Main Dir:

`cd server`

```
./celery.sh
```

Kill All Celery

`redis-cli flushall`

`ps auxww | grep 'celery worker' | awk '{print $2}' | xargs kill -9`
`ps auxww | grep 'WebServer' | awk '{print $2}' | xargs kill -9`

#### Static

```
cd static \
&& npm install \
&& npm run dev
```

### Local Dev Build WITH Docker


Up (deamon) BUILDING EVERY TIME

`docker-compose up -d --build`

Down
```
docker-compose down --remove-orphans
```

View
```
docker-compose ps
```

Prune
```
docker system prune -a --volumes
```

Examine Container
```
docker run -it gcr.io/gambit-prod-ha/server-app bash
```
