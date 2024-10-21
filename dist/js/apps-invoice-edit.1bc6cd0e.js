"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[7078],{45482:function(o,a,e){e.r(a),e.d(a,{default:function(){return ce}});var l=e(66252),n=e(49963),i=e(2262),t=e(3577),s=e(24790),r=e.n(s),p=e(56296);const u={class:"layout-px-spacing apps-invoice-add"},c=(0,l._)("ul",{class:"navbar-nav flex-row"},[(0,l._)("li",null,[(0,l._)("div",{class:"page-header"},[(0,l._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,l._)("ol",{class:"breadcrumb"},[(0,l._)("li",{class:"breadcrumb-item"},[(0,l._)("a",{href:"javascript:;"},"Apps")]),(0,l._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,l._)("span",null,"Invoice Edit")])])])])])],-1),d={class:"row invoice layout-top-spacing layout-spacing"},v={class:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},m={class:"doc-container"},b={class:"row"},_={class:"col-xl-9"},y={class:"invoice-content"},f={class:"invoice-detail-body"},h={class:"invoice-detail-title"},w={class:"invoice-logo"},g={class:"upload pe-md-4"},k=["src"],x=(0,l.uE)('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg></div><div class="mt-2">Click to Upload Picture/Logo</div>',2),C=[x],S={class:"invoice-title"},B={class:"invoice-detail-header"},U={class:"row justify-content-between"},A={class:"col-xl-5 invoice-address-company"},D=(0,l._)("h4",null,"From:-",-1),V={class:"invoice-address-company-fields"},M={class:"form-group row"},I=(0,l._)("label",{for:"company-name",class:"col-sm-3 col-form-label col-form-label-sm"},"Name",-1),T={class:"col-sm-9"},z={class:"form-group row"},N=(0,l._)("label",{for:"company-email",class:"col-sm-3 col-form-label col-form-label-sm"},"Email",-1),P={class:"col-sm-9"},L={class:"form-group row"},R=(0,l._)("label",{for:"company-address",class:"col-sm-3 col-form-label col-form-label-sm"},"Address",-1),j={class:"col-sm-9"},G={class:"form-group row"},E=(0,l._)("label",{for:"company-phone",class:"col-sm-3 col-form-label col-form-label-sm"},"Phone",-1),H={class:"col-sm-9"},K={class:"col-xl-5 invoice-address-client"},q=(0,l._)("h4",null,"Bill To:-",-1),F={class:"invoice-address-client-fields"},Y={class:"form-group row"},J=(0,l._)("label",{for:"client-name",class:"col-sm-3 col-form-label col-form-label-sm"},"Name",-1),Z={class:"col-sm-9"},$={class:"form-group row"},O=(0,l._)("label",{for:"client-email",class:"col-sm-3 col-form-label col-form-label-sm"},"Email",-1),Q={class:"col-sm-9"},W={class:"form-group row"},X=(0,l._)("label",{for:"client-address",class:"col-sm-3 col-form-label col-form-label-sm"},"Address",-1),oo={class:"col-sm-9"},ao={class:"form-group row"},eo=(0,l._)("label",{for:"client-phone",class:"col-sm-3 col-form-label col-form-label-sm"},"Phone",-1),lo={class:"col-sm-9"},no={class:"invoice-detail-terms"},io={class:"row justify-content-between"},to={class:"col-md-3"},so={class:"form-group mb-4"},ro=(0,l._)("label",{for:"number"},"Invoice Number",-1),po={class:"col-md-3"},uo={class:"form-group mb-4"},co=(0,l._)("label",{for:"date"},"Invoice Date",-1),vo={class:"col-md-3"},mo={class:"form-group mb-4"},bo=(0,l._)("label",{for:"due"},"Due Date",-1),_o={class:"invoice-detail-items"},yo={class:"table-responsive"},fo={class:"table table-bordered item-table"},ho=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:""}),(0,l._)("th",null,"Description"),(0,l._)("th",{class:""},"Rate"),(0,l._)("th",{class:""},"Qty"),(0,l._)("th",{class:"text-end"},"Amount"),(0,l._)("th",{class:"text-center"},"Tax")])],-1),wo={class:"delete-item-row"},go={class:"table-controls"},ko=["onClick"],xo=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[(0,l._)("circle",{cx:"12",cy:"12",r:"10"}),(0,l._)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),(0,l._)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1),Co=[xo],So={class:"description"},Bo=["onUpdate:modelValue"],Uo=["onUpdate:modelValue"],Ao={class:"rate"},Do=["onUpdate:modelValue"],Vo={class:"text-end qty"},Mo=["onUpdate:modelValue"],Io={class:"text-end amount"},To={class:"editable-amount mt-2"},zo=(0,l._)("span",{class:"currency"},"$",-1),No=(0,l.Uk)(),Po={class:"amount"},Lo={class:"text-center tax"},Ro={class:"checkbox-primary custom-control custom-checkbox"},jo=["id","onUpdate:modelValue"],Go=["for"],Eo={class:"invoice-detail-total"},Ho={class:"row"},Ko={class:"col-md-6"},qo={class:"form-group row invoice-created-by"},Fo=(0,l._)("label",{for:"payment-method-account",class:"col-sm-3 col-form-label col-form-label-sm"},"Account #:",-1),Yo={class:"col-sm-9"},Jo={class:"form-group row invoice-created-by"},Zo=(0,l._)("label",{for:"payment-method-bank-name",class:"col-sm-3 col-form-label col-form-label-sm"},"Bank Name:",-1),$o={class:"col-sm-9"},Oo={class:"form-group row invoice-created-by"},Qo=(0,l._)("label",{for:"payment-method-code",class:"col-sm-3 col-form-label col-form-label-sm"},"SWIFT code:",-1),Wo={class:"col-sm-9"},Xo={class:"form-group row invoice-created-by"},oa=(0,l._)("label",{for:"payment-method-country",class:"col-sm-3 col-form-label col-form-label-sm"},"Country:",-1),aa={class:"col-sm-9"},ea=(0,l.uE)('<option value="">Choose Country</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Canada">Canada</option><option value="Australia">Australia</option><option value="Germany">Germany</option><option value="Sweden">Sweden</option><option value="Denmark">Denmark</option><option value="Norway">Norway</option><option value="New-Zealand">New Zealand</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American-Samoa">Andorra</option><option value="Angola">Angola</option><option value="Antigua Barbuda">Antigua &amp; Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia">Bosnia &amp; Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="British">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Cape">Cape Verde</option><option value="Cayman">Cayman Islands</option><option value="Central-African">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Costa-Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czechia">Czechia</option><option value="Côte">Côte d’Ivoire</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El-Salvador">El Salvador</option><option value="Equatorial-Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="Gabon">Gabon</option><option value="Georgia">Georgia</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Grenada">Grenada</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong-Kong">Hong Kong SAR China</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar (Burma)</option><option value="Namibia">Namibia</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="North-Korea">North Korea</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian">Palestinian Territories</option><option value="Panama">Panama</option><option value="Papua">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Réunion">Réunion</option><option value="Samoa">Samoa</option><option value="San-Marino">San Marino</option><option value="Saudi-Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra-Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon-Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South-Africa">South Africa</option><option value="South-Korea">South Korea</option><option value="Spain">Spain</option><option value="Sri-Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="UAE">United Arab Emirates</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>',191),la=[ea],na=(0,l.uE)('<div class="col-md-6"><div class="totals-row"><div class="invoice-totals-row invoice-summary-subtotal"><div class="invoice-summary-label">Subtotal</div><div class="invoice-summary-value"><div class="subtotal-amount"><span class="currency">$</span><span class="amount">100</span></div></div></div><div class="invoice-totals-row invoice-summary-total"><div class="invoice-summary-label">Discount</div><div class="invoice-summary-value"><div class="total-amount"><span class="currency">$</span><span>10</span></div></div></div><div class="invoice-totals-row invoice-summary-tax"><div class="invoice-summary-label">Tax</div><div class="invoice-summary-value"><div class="tax-amount"><span>0%</span></div></div></div><div class="invoice-totals-row invoice-summary-balance-due"><div class="invoice-summary-label">Total</div><div class="invoice-summary-value"><div class="balance-due-amount"><span class="currency">$</span><span>90</span></div></div></div></div></div>',1),ia={class:"invoice-detail-note"},ta={class:"row"},sa={class:"col-md-12 align-self-center"},ra={class:"form-group row invoice-note"},pa=(0,l._)("label",{for:"invoice-detail-notes",class:"col-sm-12 col-form-label col-form-label-sm"},"Notes:",-1),ua={class:"col-sm-12"},ca={class:"col-xl-3"},da={class:"invoice-actions"},va={class:"invoice-action-currency"},ma={class:"form-group mb-0"},ba=(0,l._)("label",{for:"currency"},"Currency",-1),_a={class:"dropdown selectable-dropdown invoice-select d-block btn-group"},ya={href:"javascript:;",id:"ddlCurrency",class:"btn dropdown-toggle btn-icon-only text-nowrap","data-bs-toggle":"dropdown","aria-expanded":"false"},fa=["src"],ha={class:"selectable-text"},wa=(0,l._)("span",{class:"selectable-arrow"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},[(0,l._)("polyline",{points:"6 9 12 15 18 9"})])],-1),ga={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"ddlCurrency"},ka=["onClick"],xa=["src"],Ca={class:"invoice-action-tax"},Sa=(0,l._)("h5",null,"Tax",-1),Ba={class:"invoice-action-tax-fields"},Ua={class:"row"},Aa={class:"col-6"},Da={class:"form-group mb-0"},Va=(0,l._)("label",{for:"type"},"Type",-1),Ma={class:"dropdown selectable-dropdown invoice-select d-block btn-group"},Ia={href:"javascript:;",id:"ddlTax",class:"btn dropdown-toggle btn-icon-only text-nowrap","data-bs-toggle":"dropdown","aria-expanded":"false"},Ta={class:"selectable-text"},za=(0,l._)("span",{class:"selectable-arrow"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},[(0,l._)("polyline",{points:"6 9 12 15 18 9"})])],-1),Na={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"ddlTax"},Pa=["onClick"],La={class:"col-6"},Ra={key:0,class:"form-group mb-0 tax-rate-deducted"},ja=(0,l._)("label",{for:"rate"},"Rate (%)",-1),Ga={class:"invoice-action-discount"},Ea=(0,l._)("h5",null,"Discount",-1),Ha={class:"invoice-action-discount-fields"},Ka={class:"row"},qa={class:"col-6"},Fa={class:"form-group mb-0"},Ya=(0,l._)("label",{for:"type"},"Type",-1),Ja={class:"dropdown selectable-dropdown invoice-select d-block btn-group"},Za={href:"javascript:;",id:"ddlDiscount",class:"btn dropdown-toggle btn-icon-only text-nowrap","data-bs-toggle":"dropdown","aria-expanded":"false"},$a={class:"selectable-text"},Oa=(0,l._)("span",{class:"selectable-arrow"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},[(0,l._)("polyline",{points:"6 9 12 15 18 9"})])],-1),Qa={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"ddlDiscount"},Wa=["onClick"],Xa={class:"col-6"},oe={key:0,class:"form-group mb-0 discount-amount"},ae={for:"rate",class:"text-capitalize"},ee={class:"invoice-actions-btn"},le={class:"invoice-action-btn"},ne={class:"row"},ie=(0,l._)("div",{class:"col-xl-12 col-md-4"},[(0,l._)("a",{href:"javascript:;",class:"btn btn-primary btn-send"},"Send Invoice")],-1),te={class:"col-xl-12 col-md-4"},se=(0,l.Uk)("Preview"),re=(0,l._)("div",{class:"col-xl-12 col-md-4"},[(0,l._)("a",{href:"javascript:;",class:"btn btn-success btn-download"},"Save")],-1);var pe={setup(o){(0,p.j)({title:"Invoice Edit"});const a=(0,i.iH)([]),s=(0,i.iH)(e(41576)),x=(0,i.iH)({title:"Cork Inc.",invoice_no:"#0001",from:{name:"Cork Inc.",email:"info@company.com",address:"XYZ Delta Street",phone:"(120) 456 789"},to:{name:"Jesse Cory",email:"redq@company.com",address:"405 Mulberry Rd. Mc Grady, NC, 28649",phone:"(128) 666 070"},invoice_date:"",due_date:"",bank_info:{no:"1234567890",name:"Bank of America",swift_code:"VS70134",country:"United States"},notes:"Thank you for doing business with us."}),xo=(0,i.iH)([]),ea=(0,i.iH)({key:"USD - US Dollar",thumb:"flags/en.png"}),pe=(0,i.iH)([]),ue=(0,i.iH)({key:"None",value:null}),ce=(0,i.iH)([]),de=(0,i.iH)({key:"None",value:null,type:""});(0,l.bv)((()=>{a.value=[{id:1,title:"Calendar App Customization",description:"Make Calendar App Dynamic",rate:60,quantity:2,amount:120,is_tax:!1},{id:2,title:"Chat App Customization",description:"Customized Chat Application to resolve some Bug Fixes",rate:25,quantity:1,amount:25,is_tax:!1}];let o=new Date;x.value.invoice_date=JSON.parse(JSON.stringify(o)),o.setDate(o.getDate()+5),x.value.due_date=o,xo.value=[{key:"USD - US Dollar",thumb:"flags/en.png"},{key:"GBP - British Pound",thumb:"flags/gbp.png"},{key:"IDR - Indonesian Rupiah",thumb:"flags/idr.png"},{key:"INR - Indian Rupee",thumb:"flags/inr.png"},{key:"BRL - Brazilian Real",thumb:"flags/brl.png"},{key:"EUR - Germany (Euro)",thumb:"flags/de.png"},{key:"TRY - Turkish Lira",thumb:"flags/tr.png"}],pe.value=[{key:"Deducted",value:10},{key:"Per Item",value:5},{key:"On Total",value:25},{key:"None",value:null}],ce.value=[{key:"Percent",value:10,type:"percent"},{key:"Flat Amount",value:25,type:"amount"},{key:"None",value:null,type:""}]}));const ve=o=>{s.value=URL.createObjectURL(o.target.files[0])},me=()=>{let o=0;a.value&&a.value.length&&(o=a.value.reduce(((o,a)=>a.id>o?a.id:o),a.value[0].id)),a.value.push({id:o+1,title:"",description:"",rate:0,quantity:0,amount:0,is_tax:!1})},be=o=>{a.value=a.value.filter((a=>a.id!=o.id))};return(o,p)=>{const _e=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",u,[((0,l.wg)(),(0,l.j4)(l.lR,{to:"#breadcrumb"},[c])),(0,l._)("div",d,[(0,l._)("div",v,[(0,l._)("div",m,[(0,l._)("div",b,[(0,l._)("div",_,[(0,l._)("div",y,[(0,l._)("div",f,[(0,l._)("div",h,[(0,l._)("div",w,[(0,l._)("div",g,[(0,l._)("input",{ref:"fl_profile",type:"file",class:"d-none",accept:"image/*",onChange:ve},null,544),s.value?((0,l.wg)(),(0,l.iD)("img",{key:0,src:s.value?s.value:e(40744),alt:"profile",class:"profile-preview",onClick:p[0]||(p[0]=a=>o.$refs.fl_profile.click())},null,8,k)):((0,l.wg)(),(0,l.iD)("div",{key:1,class:"profile-preview upload-preview",onClick:p[1]||(p[1]=a=>o.$refs.fl_profile.click())},C))])]),(0,l._)("div",S,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[2]||(p[2]=o=>x.value.title=o),class:"form-control",placeholder:"Invoice Label"},null,512),[[n.nr,x.value.title]])])]),(0,l._)("div",B,[(0,l._)("div",U,[(0,l._)("div",A,[D,(0,l._)("div",V,[(0,l._)("div",M,[I,(0,l._)("div",T,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[3]||(p[3]=o=>x.value.from.name=o),id:"company-name",class:"form-control form-control-sm",placeholder:"Business Name"},null,512),[[n.nr,x.value.from.name]])])]),(0,l._)("div",z,[N,(0,l._)("div",P,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[4]||(p[4]=o=>x.value.from.email=o),id:"company-email",class:"form-control form-control-sm",placeholder:"name@company.com"},null,512),[[n.nr,x.value.from.email]])])]),(0,l._)("div",L,[R,(0,l._)("div",j,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[5]||(p[5]=o=>x.value.from.address=o),id:"company-address",class:"form-control form-control-sm",placeholder:"XYZ Street"},null,512),[[n.nr,x.value.from.address]])])]),(0,l._)("div",G,[E,(0,l._)("div",H,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[6]||(p[6]=o=>x.value.from.phone=o),id:"company-phone",class:"form-control form-control-sm",placeholder:"(123) 456 789"},null,512),[[n.nr,x.value.from.phone]])])])])]),(0,l._)("div",K,[q,(0,l._)("div",F,[(0,l._)("div",Y,[J,(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[7]||(p[7]=o=>x.value.to.name=o),id:"client-name",class:"form-control form-control-sm",placeholder:"Client Name"},null,512),[[n.nr,x.value.to.name]])])]),(0,l._)("div",$,[O,(0,l._)("div",Q,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[8]||(p[8]=o=>x.value.to.email=o),id:"client-email",class:"form-control form-control-sm",placeholder:"name@company.com"},null,512),[[n.nr,x.value.to.email]])])]),(0,l._)("div",W,[X,(0,l._)("div",oo,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[9]||(p[9]=o=>x.value.to.address=o),id:"client-address",class:"form-control form-control-sm",placeholder:"XYZ Street"},null,512),[[n.nr,x.value.to.address]])])]),(0,l._)("div",ao,[eo,(0,l._)("div",lo,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[10]||(p[10]=o=>x.value.to.phone=o),id:"client-phone",class:"form-control form-control-sm",placeholder:"(123) 456 789"},null,512),[[n.nr,x.value.to.phone]])])])])])])]),(0,l._)("div",no,[(0,l._)("div",io,[(0,l._)("div",to,[(0,l._)("div",so,[ro,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[11]||(p[11]=o=>x.value.invoice_no=o),id:"number",class:"form-control form-control-sm",placeholder:"#0001"},null,512),[[n.nr,x.value.invoice_no]])])]),(0,l._)("div",po,[(0,l._)("div",uo,[co,(0,l.Wm)((0,i.SU)(r()),{modelValue:x.value.invoice_date,"onUpdate:modelValue":p[12]||(p[12]=o=>x.value.invoice_date=o),class:"form-control form-control-sm flatpickr active",placeholder:"Invoice Date"},null,8,["modelValue"])])]),(0,l._)("div",vo,[(0,l._)("div",mo,[bo,(0,l.Wm)((0,i.SU)(r()),{modelValue:x.value.due_date,"onUpdate:modelValue":p[13]||(p[13]=o=>x.value.due_date=o),class:"form-control form-control-sm flatpickr active",placeholder:"Due Date"},null,8,["modelValue"])])])])]),(0,l._)("div",_o,[(0,l._)("div",yo,[(0,l._)("table",fo,[ho,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.value,((o,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:a},[(0,l._)("td",wo,[(0,l._)("ul",go,[(0,l._)("li",null,[(0,l._)("a",{href:"javascript:void(0);",class:"delete-item",onClick:a=>be(o)},Co,8,ko)])])]),(0,l._)("td",So,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":a=>o.title=a,class:"form-control form-control-sm",placeholder:"Item Description"},null,8,Bo),[[n.nr,o.title]]),(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":a=>o.description=a,class:"form-control",placeholder:"Additional Details"},null,8,Uo),[[n.nr,o.description]])]),(0,l._)("td",Ao,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":a=>o.rate=a,class:"form-control form-control-sm",placeholder:"Price"},null,8,Do),[[n.nr,o.rate]])]),(0,l._)("td",Vo,[(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":a=>o.quantity=a,class:"form-control form-control-sm",placeholder:"Quantity"},null,8,Mo),[[n.nr,o.quantity]])]),(0,l._)("td",Io,[(0,l._)("span",To,[zo,No,(0,l._)("span",Po,(0,t.zw)(o.amount),1)])]),(0,l._)("td",Lo,[(0,l._)("div",Ro,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:`chktax-${a}`,"onUpdate:modelValue":a=>o.is_tax=a,class:"custom-control-input"},null,8,jo),[[n.e8,o.is_tax]]),(0,l._)("label",{class:"custom-control-label",for:`chktax-${a}`},null,8,Go)])])])))),128))])])]),(0,l._)("button",{type:"button",class:"btn btn-secondary additem btn-sm",onClick:p[14]||(p[14]=o=>me())},"Add Item")]),(0,l._)("div",Eo,[(0,l._)("div",Ho,[(0,l._)("div",Ko,[(0,l._)("div",qo,[Fo,(0,l._)("div",Yo,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[15]||(p[15]=o=>x.value.bank_info.no=o),id:"payment-method-account",class:"form-control form-control-sm",placeholder:"Bank Account Number"},null,512),[[n.nr,x.value.bank_info.no]])])]),(0,l._)("div",Jo,[Zo,(0,l._)("div",$o,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[16]||(p[16]=o=>x.value.bank_info.name=o),id:"payment-method-bank-name",class:"form-control form-control-sm",placeholder:"Insert Bank Name"},null,512),[[n.nr,x.value.bank_info.name]])])]),(0,l._)("div",Oo,[Qo,(0,l._)("div",Wo,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":p[17]||(p[17]=o=>x.value.bank_info.swift_code=o),id:"payment-method-code",class:"form-control form-control-sm",placeholder:"Insert Code"},null,512),[[n.nr,x.value.bank_info.swift_code]])])]),(0,l._)("div",Xo,[oa,(0,l._)("div",aa,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":p[18]||(p[18]=o=>x.value.bank_info.country=o),class:"country_code form-select form-select-sm",id:"payment-method-country"},la,512),[[n.bM,x.value.bank_info.country]])])])]),na])]),(0,l._)("div",ia,[(0,l._)("div",ta,[(0,l._)("div",sa,[(0,l._)("div",ra,[pa,(0,l._)("div",ua,[(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":p[19]||(p[19]=o=>x.value.notes=o),rows:"3",id:"invoice-detail-notes",class:"form-control",placeholder:'Notes - For example, "Thank you for doing business with us"'},null,512),[[n.nr,x.value.notes]])])])])])])])])]),(0,l._)("div",ca,[(0,l._)("div",da,[(0,l._)("div",va,[(0,l._)("div",ma,[ba,(0,l._)("div",_a,[(0,l._)("a",ya,[(0,l._)("img",{src:e(90990)("./"+ea.value.thumb),class:"flag-width",alt:"flag"},null,8,fa),(0,l._)("span",ha,(0,t.zw)(ea.value.key),1),wa]),(0,l._)("ul",ga,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(xo.value,((o,a)=>((0,l.wg)(),(0,l.iD)("li",{key:a},[(0,l._)("a",{href:"javascript:;",class:"dropdown-item",onClick:a=>ea.value=o},[(0,l._)("img",{src:e(90990)("./"+o.thumb),class:"flag-width",alt:"flag"},null,8,xa),(0,l.Uk)(" "+(0,t.zw)(o.key),1)],8,ka)])))),128))])])])]),(0,l._)("div",Ca,[Sa,(0,l._)("div",Ba,[(0,l._)("div",Ua,[(0,l._)("div",Aa,[(0,l._)("div",Da,[Va,(0,l._)("div",Ma,[(0,l._)("a",Ia,[(0,l._)("span",Ta,(0,t.zw)(ue.value.key),1),za]),(0,l._)("ul",Na,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(pe.value,((o,a)=>((0,l.wg)(),(0,l.iD)("li",{key:a},[(0,l._)("a",{href:"javascript:;",class:"dropdown-item",onClick:a=>ue.value=o},(0,t.zw)(o.key),9,Pa)])))),128))])])])]),(0,l._)("div",La,[null!==ue.value.value?((0,l.wg)(),(0,l.iD)("div",Ra,[ja,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":p[20]||(p[20]=o=>ue.value.value=o),type:"number",min:"0",max:"100",class:"input-rate form-control",placeholder:"Rate"},null,512),[[n.nr,ue.value.value]])])):(0,l.kq)("",!0)])])])]),(0,l._)("div",Ga,[Ea,(0,l._)("div",Ha,[(0,l._)("div",Ka,[(0,l._)("div",qa,[(0,l._)("div",Fa,[Ya,(0,l._)("div",Ja,[(0,l._)("a",Za,[(0,l._)("span",$a,(0,t.zw)(de.value.key),1),Oa]),(0,l._)("ul",Qa,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(ce.value,((o,a)=>((0,l.wg)(),(0,l.iD)("li",{key:a},[(0,l._)("a",{href:"javascript:;",class:"dropdown-item",onClick:a=>de.value=o},(0,t.zw)(o.key),9,Wa)])))),128))])])])]),(0,l._)("div",Xa,[null!==de.value.value?((0,l.wg)(),(0,l.iD)("div",oe,[(0,l._)("label",ae,(0,t.zw)(de.value.type),1),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":p[21]||(p[21]=o=>de.value.value=o),type:"number",min:"0",class:"input-rate form-control",placeholder:"Rate"},null,512),[[n.nr,de.value.value]])])):(0,l.kq)("",!0)])])])])]),(0,l._)("div",ee,[(0,l._)("div",le,[(0,l._)("div",ne,[ie,(0,l._)("div",te,[(0,l.Wm)(_e,{to:"/apps/invoice/preview",class:"btn btn-dark btn-preview"},{default:(0,l.w5)((()=>[se])),_:1})]),re])])])])])])])])])}}};const ue=pe;var ce=ue}}]);
//# sourceMappingURL=apps-invoice-edit.1bc6cd0e.js.map