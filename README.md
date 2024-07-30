# 🎬 Cinematic Script Syntax Highlighter

Welcome to the **Cinematic Script Syntax Highlighter** for Visual Studio Code! This extension brings vibrant syntax highlighting to your `.cmtc` files, making it easier to write and manage your cinematic scripts. Whether you're a game developer, animator, or just a script enthusiast, this tool will add a splash of color to your coding experience!

## ✨ Features

- **Syntax Highlighting**: Enjoy clear and colorful syntax highlighting for your `.cmtc` scripts.
- **Custom Colors**: Tags like `<moveTo>` and `<lookAt>` are highlighted in bright colors for easy identification.
- **Vector & Numeric Formatting**: Special highlighting for vectors and numeric values to keep your scripts organized and readable.

## 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nweissberg/cmtc-syntax-highlighter
   cd cmtc-syntax-highlighter
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install -g vsce
   ```

3. **Package and Install the Extension**

   ```bash
   vsce package
   code --install-extension cmtc-syntax-highlighter-0.1.0.vsix
   ```

   Replace `cmtc-syntax-highlighter-0.1.0.vsix` with the actual name of the `.vsix` file generated.

## 🛠 Usage

1. **Open a `.cmtc` File**

   Once installed, open any `.cmtc` file in VS Code. The syntax highlighting will be automatically applied.

2. **Customization**

   Feel free to tweak the colors and styles in the `cmtc.tmLanguage.json` file if you want to customize the appearance further.

## 📜 Example `.cmtc` Script

Here's an example of how your `.cmtc` scripts will look with syntax highlighting:

```cmtc
<start>

<getObject> testCube

<delay> 10

<moveTo> [-3,4,0] 5
<lookAt> [0,-2,0] 1

<moveTo> [3,1,0] 5
<lookAt> [0,3,0] 10

<moveTo> [0,0,0] 12
<lookAt> [0,1,0] 2

<moveTo> [0,4,0] 5
<lookAt> [0,0,0] 1

<delay> 3

<moveTo> [0,-100,0] 2

<end>
```

In this example, tags like `<moveTo>` and `<lookAt>` are highlighted in vibrant colors to make them stand out.

## 💬 Feedback & Contributions

We'd love to hear your feedback or see your contributions! Open issues or submit pull requests on our [GitHub repository](https://github.com/your-username/cmtc-syntax-highlighter).

## 📚 Resources

- [Visual Studio Code Documentation](https://code.visualstudio.com/docs)
- [TextMate Grammar Guide](https://manual.macromates.com/en/language_grammars)

