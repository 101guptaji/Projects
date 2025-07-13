const keywords = {
    'javascript': [
        'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch',
        'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
        'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final',
        'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import',
        'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new',
        'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static',
        'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true',
        'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'
      ],
    'cpp': [
        'asm', 'double', 'new', 'switch', 'auto', 'else', 'operator', 'template',
        'break', 'enum', 'private', 'this', 'case', 'extern', 'protected', 'throw',
        'catch', 'float', 'public', 'try', 'char', 'for', 'register', 'typedef',
        'class', 'friend', 'return', 'union', 'const', 'goto', 'short', 'unsigned',
        'continue', 'if', 'signed', 'virtual', 'default', 'inline', 'sizeof', 'void',
        'delete', 'int', 'static', 'volatile', 'do', 'long', 'struct', 'while'
      ],
    'c': [
        'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
        'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
        'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof', 'static',
        'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while'
      ],
    'java': [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
        'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
        'extends', 'final', 'finally', 'float', 'for', 'if', 'implements', 'import',
        'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
        'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
        'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
        'try', 'void', 'volatile', 'while'
      ],
    'python': [
        'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break',
        'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally',
        'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal',
        'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'
    ],
}

const variableInput = document.getElementById("variableInput");
const resultContainer = document.querySelector('.resultContainer');

// verify the variable, then display the results
function verifyTheVariable(event) {
  event.preventDefault();   // prevent default form submission behaviour

  const programmingLang = document.getElementById("progLang").value;

  resultContainer.innerHTML = "";

  const variable = variableInput.value;
  variableInput.value = "";

  if (!variable) {
    return;
  }

  const result = document.createElement("p");
  result.setAttribute("id", "result");

  // variable always starts with letter or underScore
  if(/^[A-Za-z_]$/.test(variable[0]) === false ){
    result.textContent = 'inValid variableName'
  } else if (keywords[programmingLang].includes(variable)) {
    result.textContent = 'inValid variableName'
  } else {
    result.textContent = 'valid variableName'
  }

  resultContainer.appendChild(result);
}

// clear the input and displayed result on changing the programming language 
function resetPage() {
  
  resultContainer.innerHTML = ''  
  variableInput.value = '';
}