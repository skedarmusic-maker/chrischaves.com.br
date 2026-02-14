@echo off
chcp 65001 >nul
echo Iniciando clonagem do template...
cd ..
if not exist "Template_Mestre_Chaveiro" mkdir "Template_Mestre_Chaveiro"

echo Copiando arquivos (ignorando node_modules, .next, .git)...
robocopy "Chris Chaveiro" "Template_Mestre_Chaveiro" /MIR /XD node_modules .next .git .vscode .gemini tmp "brain" /XF clonar_template.bat

echo.
echo ========================================================
echo  TEMPLATE CRIADO COM SUCESSO!
echo ========================================================
echo  Local: ..\Template_Mestre_Chaveiro
echo.
echo  Para usar o template:
echo  1. Abra a pasta Template_Mestre_Chaveiro no VS Code
echo  2. Abra o terminal e digite: npm install
echo  3. Digite: npm run dev
echo ========================================================
pause
