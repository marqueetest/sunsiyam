<%@ page trace = "false" validateRequest="false" %>

<%-- set correct site name based on requested domain and culture --%>
<% string siteName = "HomePageEN"; %>
<% string hostName = Request.Url.Host; %>
<% System.Text.RegularExpressions.Match languagePathMatch = System.Text.RegularExpressions.Regex.Match(Request.RawUrl, "^/(.{2})/"); %>
<% if (languagePathMatch.Success) { hostName += languagePathMatch.Groups[0]; } %> 
<% string culture = ""; %>

<% if (hostName == "staging.sunsiyam.com/ar/") { siteName = "AR"; } %>
<% if (hostName == "staging.sunsiyam.com/de/") { siteName = "HomepageDE"; } %>
<% if (hostName == "staging.sunsiyam.com/es/") { siteName = "PaginaDeInicioES"; } %>
<% if (hostName == "staging.sunsiyam.com/fr/") { siteName = "PageDAccueilFR"; } %>
<% if (hostName == "staging.sunsiyam.com/ru/") { siteName = "GlavnayaRU"; } %>
<% if (hostName == "staging.sunsiyam.com/zh/") { siteName = "HomePageZH"; } %>

<%-- return file content with a 500 status code --%>
<% Response.StatusCode = 500; %>
<% if (!string.IsNullOrEmpty(siteName)) { Response.WriteFile("500-" + siteName + ".html"); } %>
