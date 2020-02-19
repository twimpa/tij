# tij
TWIMPA ImageJ interface

## 1. Install

### 1.1. Clone the project `tij`

Open a new terminal and create a directory for cloning this project. For example...

```bash
cd <somewhere_in_my_home>
mkdir project
cd project
git clone https://github.com/twimpa/tij.git` 
```

### 1.2. Configuration

Check you already have npm version > 6.x.x installed.
In your terminal, type:
`npm -v`
If you get a version like...
`6.13.7`

Then, `cd` in the `tij `directory and type in your terminal
`npm install`

### 1.3. Create the bundle file

`npm run dev`

### 1.4. Run the tests

#### 1.4.1. In ImageJ

Run ImageJ, then go to `File > Open` for opening the file `imagej_tests.js`. Once the Script window is displayed, run the script by choosing in the menubar `Macros > Run...` or by typing <kbd>Ctrl</kbd>+<kbd>R</kbd>.

#### 1.4.2. In the browser

web_tests.html &mdash; with jasmine &mdash;
