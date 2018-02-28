DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

Summary: This script shows Google Calendar events for the Calendar IDs listed in Column A and a specified event creator.

1) Open a new Google Sheet in Drive.
2) Go to Tools > Script Editor.
3) Paste the Apps Script into the Script Editor.
4) Go to Resources > Advanced Google Services and enable the Calendar API. http://screenshots.bettercloud.com/302j2s3U3v07
5) Enable from API Console as well: http://screenshots.bettercloud.com/0S2U1t3W1823
6) In the sheet, enter the Calendar ID of the Resources you wish to examine in Column A. http://screenshots.bettercloud.com/1w353n2A0M0d
7) You can get Calendar IDs from Google Calendar > Calendar Settings: http://screenshots.bettercloud.com/200s170w0H21
8) Or from BetterCloud using Calendar Audit, selecting the Calendar > Details. http://screenshots.bettercloud.com/3N3v1a1B3q2A
9) In the script code, enter the email address of the event creator in the 'creator' string. http://screenshots.bettercloud.com/0G0v1m0R2F2x
10) Press the Play button to run the script. 
11) The Google Sheet will populate with the latest events: http://screenshots.bettercloud.com/0o3v2N1K3629
