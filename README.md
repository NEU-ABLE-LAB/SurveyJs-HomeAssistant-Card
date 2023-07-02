# SurveyJs Form Card
A minimal card with manual setup
***


* @published: May 2023
* @author: Manikanta Reddy Thikkavarapu
* @workspace: `config/www`

The target of this tutorial is to show minimal steps to be done to get hello
world output from a card written all by yourself. The setup is still done
manually to understand the technical requirements. More advanced solutions will
be covered by future tutorials. Please understand minimal as a reasonable
minimum to get started, not as the absolute minimum.

## Prerequisites

* [Development Environment](https://github.com/home-assistant-tutorials/01.development-environment)
* the Prerequisites named there
* basic skills of Javascript, Jquery, Web Components, Lit Library
* a workspace `config/www`

## TODO: Add How to: HACS installation 

* HACS is the Home Assistant Community Store where you can find extra integrations for Home Assistant that are not part of the core installation.
* First, let’s make sure that you have the advanced mode enabled for your user. This way you see more options in Home Assistant.
1. Go to your Profile Name.
2. Scroll down and enable Advanced Mode.
3. To install HACS, you need to install the SSH Terminal first.
4. Go to Settings.
5. Go to Add-ons.
6. Click Add-on Store.
7. Click the Terminal & SSH card.
8. Click Install.
9. Turn on all the options and click start.
10. You’ll now see a new Terminal menu item in the left menu.
11. Now we can install HACS.
12. Go to Terminal.
13. Type the following code.
wget -O - https://get.hacs.xyz | bash -
14. Wait until the code is downloaded.
15. Now reboot Home Assistant.
16. Go to Settings, System, Restart.
17. Go to Settings -> Devices and Services.
18. Click Add integration and search for HACS.
19. If you do not see HACS in the list, then please clear your browser cache and try again.
20. Click HACS.
21. Tick all the boxes and click Submit.

Copy the key that is shown in the dialog box, and click on the link to open GitHub.

Log in to GitHub.
If you do not have a GitHub account yet, please create one first.

Paste the code that you copied from Home Assistant.
1. Click Continue.
2. Click Authorize hacs.
3. Now go back to Home Assistant.
4. Click Finish.
5. You’ll see a HACS menu item on the left menu.
6. If you click HACS, you’ll see options to install HACS integrations into Home Assistant.
7. So, HACS is now installed and you can start installing HACS integrations as of now!

## TODO: Manual Installation

## Cloning the Repository

You may clone this repository into your workspace and follow along.
Alternatively you may want to write the code yourself, to get a deeper effect of
learning. Just decide what works best for you.

Fork the repository on Github into your own instance. Open the workspace
directory in the command-line. Call `git clone <URL>`. Use the `URL` Github does
give you, when you click the button `Code`. If your setup is well done, you
should prefer `SSH` over `HTTPS`. This allows you to easily push to your
repository.

##  For further deep-dive into the code go to code-explainer.md