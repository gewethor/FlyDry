# Executive Project Summary
  
### Problem Statement  
Every year consumers spend hundreds, if not thousands of dollars buying new clothes. We spend a fortune on top of the line washers, dryers, laundry detergents, fabric softener, bleach, and stain removers. It would be safe to say that the average person cares quite a bit about how they dress themselves and how well their clothing is maintained. However, within this cycle of caring for clothing, a common issue has affected almost anyone who washes their own clothes. During the drying process, a brand-new or even an old beloved article of clothing has shrunk. That article of clothing spent too much time in the dryer and it is now ruined forever. However, this could have been avoided if the individual had used FlyDry. 

### Project Goals  
The task to end laundry skrinkage is by no means small, however it is an achievable goal. The following is a list of projects goals that will be achieved in order to make FlyDry a successful reality. 
 1. Perform intense laundry analytics. Studying average laundry dry time will be done on the following categories of laundry loads. 
     - Colors, Darks, Whites, Small-Loads, Medium-Loads, and Large-Loads
 2. Create a protective environment for the FlyDry device to prevent it from being harmed in the dryer. 
 3. Create an application with a easy-to-use user interface which allows the consumer to quickly and easily choose their laundry load of choice.
 4. Ensure that the FlyDry device works accurately with the application. 
 5. Test loads of laundry to ensure analytics are accurate with the FlyDry device.
 6. Perform penetration testing to ensure the application is safe from malicious entities.
 
### Project Merit
FlyDry is a new technology designed to help consumers save their clothing. With the utilization of IoT and temperature sensing technology, FlyDry determines how long laundry needs to stay in the drier before it risks overheating, causing clothes to shink. This device will save the average consumer from ruining their own clothes. Since this is a common issue that happens to almost everyone, this product can be marketed to the masses. Anyone between the ages of 16-100 will have an interest in this product. 
  
# Project Timeline  
 
![projected timeline](https://cloud.githubusercontent.com/assets/17163854/24663855/b321a704-191e-11e7-8255-62cc5d634949.PNG)

 
# Risk List  
|Risk name (value)  | Impact     | Likelihood | Description | Mitigation |
|-------------------|------------|------------|-------------|------------|
| Malicious popups being inserted into the app / Injection (56) | 8 | 7 | The ad server selected for this application has not been secured and accepts malicious submissions from ad partner networks. | Ensure that any advertisements are filtered or verified before being allowed access.|
| Information is being stolen from the user/development team (25) | 5 | 5 | The ad server selected for this application has not been secured and allows for user information to be stolen. | Ensure that any advertisements are filtered or verified before being allowed access.|
| Physical Tampering (18)| 9 | 2 | A malicious entity tampering with the FlyDry device. | Making a note in the instruction sheet to remind users to store their device in a safe space. Ensure the development team keeps the prototype device in a safe space.|      
| Man-in-the-Middle Attack (21)| 7 | 3 | The user or the development team using insecure Wi-Fi while using the FlyDry application.| Making a note in the instruction sheet to remind users to encrypt their Wi-Fi. Ensure the development team remembers to only use secure Wi-Fi. | 
| Bluetooth Sniffing (30)| 6 | 5 | A malicious entity monitors the traffic to and from the FlyDry device. | Making a note in the instruction sheet to remind users to turn their Bluetooth connection off when FlyDry is not being used. Also to turn the device to a hidden setting if at all possible. |  
 
# Application Requirements 
 
## User Stories
Title: Knowing how long it takes for clothes to dry 

Description:
As someone who frequently does laundry, I want to know exactly how long it takes my clothes to dry so I can prevent my clothes from shrinking.  

Acceptance Criteria: 
- Send an alert when the clothes have reached their optimal dry time. 
- Give the user an average time of when the load of laundry should be dry.
 
Title: Alert ASAP 

Description:
As someone who frequently does laundry, I want to be alerted right away when my laundry is done drying so I can save time.  

Acceptance Criteria:
- Send an alert when the clothes have reached their optimal dry time.
 
Title: Laundry Load Type 

Description: 
As someone who frequently does laundry, I want to know how long it takes each different type of laundry load to dry so I can save on electricity.  

Acceptance Criteria: 
- Provide the user multiple (18 to be exact) laundry load combinations to ensure that each type of laundry load is accounted for.

## Misuser Stories  
Title: Stealing User Credentials  

Description:
As a black hat hacker, I want to steal the FlyDry user's credentials so I can sell their information online.  

Mitigation: 
- Ensure that any advertisements are filtered or verified before being allowed access.
- Making a note in the instruction sheet to remind users to encrypt their Wi-Fi. 
- Making a note in the instruction sheet to remind users to turn their Bluetooth connection off when FlyDry is not being used.
  
Title: Inject Malicious Script  

Description:
As a grey hat hacker, I want to try to inject malicious script into the hybrid app so I can see if my attack worked. 
 
Mitigation:
- Making a note in the instruction sheet to remind users to encrypt their Wi-Fi.
  
Title: Malicious Sibling 

Description:
As someone who wants to wear my siblings' clothes that are too big for me, I want to ruin the FlyDry device so I can wear my siblings' clothes.  
 
Mitigation:
- Making a note in the instruction sheet to remind users to store their device in a safe space.
 
# Architectural Diagram  
 
https://www.lucidchart.com/documents/embeddedchart/c46b7fdf-d022-477f-8f47-45977cb61fc0

# Data Collected from in class Demo 5/2/2017

[Data from Class Demo .xlsx](https://github.com/gewethor/FlyDry/files/972400/Data.from.Class.Demo.xlsx)

# Hardware/Software Requirements 

- Any MbientLab sensor capable of tracking temperature.
- You will need the following things properly installed on your computer.
  - Git
  - Node.js (with NPM)
  - Bower 
  - Ember CLI
  - PhantomJS
  
 # Installation

* `git clone <repository-url>` this repository
* `cd fly-dry`
* `npm install`
* `bower install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production) 

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
