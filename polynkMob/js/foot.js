layui.use(['layer', 'jquery'], function () {
    var layer = layui.layer,
        $=layui.jquery;
    $(function () {
        $('.cookie').click(function () {
            var cont = '<div class="shadeMask2">\n' +
                '        <p class="strB">Why do we have a privacy policy? </p>\n' +
                '        <p class="strSmall">Polynk.com (“we”) care about your privacy. Therefore, we always strive to protect your\n' +
                '            personal data in the best possible way and to comply with all applicable laws and regulations for the\n' +
                '            protection of personal data. In this policy, we want to inform you about how we collect and process your\n' +
                '            personal data in accordance with the EU regulation 2016/679 (“GDPR”) to guarantee an open and transparent\n' +
                '            processing of your personal data.\n' +
                '        </p>\n' +
                '        <p class="strB">Who is responsible for your personal data?</p>\n' +
                '        <p class="strSmall">Polynk.com, no 91320481MA215T1W6Q, is responsible for the processing of your personal data.\n' +
                '            The following is Polynk.com’s contact information:\n' +
                '            Telephone number: +86 0519 87108958\n' +
                '            Address: Room 504, No.85 Shangshang Road, Kunlun Street, Liyang City, Jiangsu Province, China, PR</p>\n' +
                '\n' +
                '        <p class="strB">What personal data do we process? </p>\n' +
                '        <p class="strSmall">Polynk.com process information about you when you use Polynk.com’s webpage by saving cookies\n' +
                '            on your computer. The personal data we process about you are your IP address, your preferences and your\n' +
                '            activities on our webpage. The cookies collecting information about use of our website collect information\n' +
                '            in an anonymous form, including the number of visitors to the website, which country the internet connection\n' +
                '            is from, which web browser and version is used and the title on the pages they visited.\n' +
                '            If you play a video on our webpage, YouTube might save cookies on your computer depending on your settings.\n' +
                '            Please review YouTube’s Privacy policy for further information. If you do not want YouTube to save cookies\n' +
                '            on your computer, do not play any videos on our webpage since YouTube operates these videos.\n' +
                '            When you accept cookies on your computer you will provide us with your information. If you do not want\n' +
                '            cookies to be saved on the computer, you can prevent this by not accepting cookies to be saved on your\n' +
                '            computer. Please note, that if you deny functional cookies the webpage will have limited function.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">For what purpose do we process your personal data? </p>\n' +
                '        <p class="strSmall">We process your personal data to be able to offer a functional webpage. These functional\n' +
                '            cookies are essential for your use of the webpage’s features. We also process information about your\n' +
                '            activities on our webpage over time for non-advertising purposes such as improving the site functionality,\n' +
                '            the website experience and to improve the website. We also process your personal data to help us remember\n' +
                '            your preferences such as language or location to create a better experience when visiting the webpage. Who\n' +
                '            has access to your personal data. \n' +
                '            As a starting point, your personal data will only be processed by Polynk.com. Our IT suppliers might get\n' +
                '            access to the personal data and other information when developing and supporting our IT system. These IT\n' +
                '            supporters only process personal data on our behalf and never on their own behalf.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">On what legal ground do we process your personal data? </p>\n' +
                '        <p class="strSmall">The legal ground for Polynk.com’s processing of your personal data by saving cookies on your\n' +
                '            computer is Polynk.com’s legitimate interest under, under article 6.1 (f) GDPR, to process your personal\n' +
                '            data in order allow you to navigate the site, use our features and for us to remember your preferences\n' +
                '            (functional and preference cookies). Analytic cookies are processed so that we can improve the webpage’s\n' +
                '            functionality and the website experience. You can always deny these cookies if you do not want us to save\n' +
                '            these on your computer.  </p>\n' +
                '\n' +
                '        <p class="strB">For how long will we process and store your personal data? </p>\n' +
                '        <p class="strSmall">Your personal data will be sorted out/erased according to the following: Functional cookies\n' +
                '            will be erased when the web browser is closed. Preference cookies will be erased after 100 days. Analytic\n' +
                '            cookies will be erased after two years.  </p>\n' +
                '\n' +
                '        <p class="strB">Transfer of personal data to third countries </p>\n' +
                '        <p class="strSmall">As a general principle, Polynk.com only processes your personal data within the EU/EEA. If\n' +
                '            your personal data would processed outside the EU/EEA, then we will make sure that such processing is either\n' +
                '            based on a decision from the Commission establishing that the country in question ensures an adequate level\n' +
                '            of protection or appropriate safeguards that ensure that your rights are protected or based on another\n' +
                '            ground for such transfer in accordance with GDPR.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Your rights </p>\n' +
                '        <p class="strB">Right to access to your personal data </p>\n' +
                '        <p class="strSmall">You are entitled to request information about which personal data we process about you and\n' +
                '            how the personal data is being processed. You also have the right to request a copy of the personal data we\n' +
                '            process about you.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Right to rectification</p>\n' +
                '        <p class="strSmall">If you consider your personal data that Polynk.com process to be inaccurate, e.g.\n' +
                '            information concerning your name or address, you have the right to get the inaccurate information corrected\n' +
                '            and to get the incomplete information completed by providing us with the correct information.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Right to erasure</p>\n' +
                '        <p class="strSmall">You have the right to request that your personal data is erased, e.g. if the processing is\n' +
                '            no longer relevant in relation to the purpose the information was collected for or if you recall your\n' +
                '            consent to the processing and there are no other legal ground for the process.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Right to limitation of processing</p>\n' +
                '        <p class="strSmall">You have the right to request limitation of the processing of your personal data, with the\n' +
                '            exception for storage. Limitation of processing can be requested for example if you object to the accuracy\n' +
                '            of the personal data or if you consider the processing of your personal data to be unlawful.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Right to objection  </p>\n' +
                '        <p class="strSmall">You have the right to object at any time concerning the processing of your personal data in\n' +
                '            accordance with article 6.1 (e) or (f) (legitimate interest) GDPR, including profiling based on those\n' +
                '            provisions.\n' +
                '            Where personal data are processed for direct marketing purposes, you have the right to object at any time to\n' +
                '            processing of personal data concerning such marketing, which includes profiling to the extent that it is\n' +
                '            related to such direct marketing. </p>\n' +
                '\n' +
                '        <p class="strB">Right to data portability </p>\n' +
                '        <p class="strSmall">You have the right to obtain the personal data you have provided us with in a structured,\n' +
                '            commonly used and machine-readable format and have these transmitted to another controller, provided that\n' +
                '            the process is automatized and that the process is based on a consent or an agreement.  </p>\n' +
                '\n' +
                '        <p class="strB">Changes in this policy </p>\n' +
                '        <p class="strSmall">Polynk.com is entitled to amend this policy at any time if it is necessary to fulfill the\n' +
                '            requirements according to applicable laws and regulations or if it is necessary due to changes in Polynk.com\n' +
                '            operations. \n' +
                '            In such a situation, Polynk.com will provide information concerning the changes according to applicable law.\n' +
                '            Applicable information will be available in this privacy policy, on the website of Polynk.com and/or\n' +
                '            provided in other appropriate ways.\n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Observance of GDPR</p>\n' +
                '        <p class="strSmall">Do not hesitate to contact Polynk.com if you, for any reason, feel unhappy about our\n' +
                '            processing of your personal data. If you would still be of the opinion that your rights, according to GDPR,\n' +
                '            have not been satisfied you have the right to send a complaint to the regulatory authority. You will find\n' +
                '            more information concerning this on<a href="https://www.imy.se/"> www.datainspektionen.se</a>. \n' +
                '        </p>\n' +
                '\n' +
                '        <p class="strB">Our contact details </p>\n' +
                '        <p class="strSmall">If you would like to contact us concerning our processing of your personal data or if you\n' +
                '            have questions concerning this privacy policy, you are welcome to contact us on gfy@polynk.com. Copyright\n' +
                '            (©) 2021 Polynk.com</p>\n' +
                '    </div>';
            layer.ready(function () {
                layer.open({
                    type: 1,//Page层类型
                    area: ['93vw', '94vh'],
                    skin: '',
                    title: "",
                    shade: 0.5,//遮罩透明度
                    maxmin: false,//允许全屏最小化
                    anim: 4,//0-6的动画形式，-1不开启
                    content: cont
                });
            })


        })
    })

})