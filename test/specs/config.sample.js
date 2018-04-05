var assert = require('assert');
var configData = require('./data/config.json');

describe('Quanra Preprod Application Scenarios', function() {
	
    it('is able to login using valid Username and Password', function () {
		// Maximize Current Browser window and get URL
		browser.windowHandleMaximize('current');
        browser.url(configData.url);
		
		browser.timeouts('implicit', 20000);
		
		//Click on Login Link to navigate to login pop up 
		var login = browser.element('.openLogin');
		login.waitForVisible();
		
		login.click();
		
		//Add Username
		var Username = browser.element('input[name="email"]');
		Username.waitForVisible();
		
		Username.setValue(configData.username);
		
		//Add Password
		var Password = browser.element('#password');
		Password.waitForVisible();
		
		Password.setValue(configData.password);
		
		//Click on Login Button
		var loginButton = browser.element('input[value="Login"]');
		loginButton.waitForVisible();
		
		loginButton.click();
		
		//Click on Log in Circle
		var ProfileCircle = browser.element('.nav-user-profile span');
		ProfileCircle.waitForVisible();
		
		ProfileCircle.click();
		
		//Validate if the user is logged in
		var ProfileWelcomeText = browser.element('.popTop p');
		ProfileWelcomeText.waitForVisible();
		
		var ProfileLoggedInName = browser.element('.popTop h1');
		ProfileLoggedInName.waitForVisible();
		
		assert.equal(ProfileWelcomeText.getText(),'Welcome,');
		assert.equal(ProfileLoggedInName.getText(),'Quantra');
    });
	
	it('is able to upvote the first post', function () {
		
		//Click on New Post Button 
		var upvote = browser.element('.community-listing:first-of-type .col-sm-1 a:first-child');
		upvote.waitForVisible();
		
		upvote.click();
    });
	
	it('is user able to submit post without clicking on captcha', function () {
		
		//Click on New Post Button 
		var newpost = browser.element('a[class*="new-post-btn"]');
		newpost.waitForVisible();
		
		newpost.click();
		
		//Add Post Title
		var posttitle = browser.element('input[name="title"]');
		posttitle.waitForVisible();
		
		posttitle.setValue(configData.postTitle);
		
		//Click on Source Button 
		var source = browser.element('a[title="Source"]');
		source.waitForVisible();
		
		source.click();
		
		//Add Post Description
		var postdescription = browser.element('textarea[title*="Rich Text Editor, questionC"]');
		postdescription.waitForVisible();
		
		postdescription.setValue(configData.postDescription);
		
		//Click on Source Button
		source.waitForVisible();
		
		source.click();
		
		//Click on Log in Circle
		var Tag = browser.element('div[name="tagId"]:nth-of-type(1)');
		Tag.waitForVisible();
		
		Tag.click();
		
		//Click on Post Button
		var createPost = browser.element('.modal-footer button:nth-of-type(1)');
		createPost.waitForVisible();
		
		createPost.click();
		
		//Validate if the user is logged in
		
		var alertMessage = browser.element('//*[contains(text(),"captcha")]');
		alertMessage.waitForVisible();
		
		assert.equal(alertMessage.getText(),'Recaptcha required');
    });
});