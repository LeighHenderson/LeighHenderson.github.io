---
title: Background Styles
description: "Playful interactions between background layers and dividers."

permalink: /background-styles/
stylesheets: 
  - background-styles
  - flexbox-homepage-gallery
category: draft
layout: home
---
<header>
    <div class="crop-height"> 
        <div class="title">
            <img src="/assets/logo_labnotes.gif" alt="Lab Notes Logo" style ="max-height:100%; display:block; margin:auto;">
        </div>
    </div>
</header>

<div style="height:50px;"></div>

<section class="container">
    <div class="row">
        <div class="one-third column" style="height:200px;">
            <ul class="flex-container column muted-colors">
                <li class="flex-item">Concepts
                </li>
                {% for page in site.pages %} 
                    {% if page.title and page.category == 'concept' %}
                    <li class="flex-item">
                        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a> 
                    </li>
                    {% endif %} 
                {% endfor %}
            </ul>
        </div>
        <div class="one-third column" style="height:200px;">
            <ul class="flex-container column">
                <li class="flex-item">Protocols
                </li>
                {% for page in site.pages %} 
                    {% if page.title and page.category == 'protocol' %}
                    <li class="flex-item">
                        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a> 
                    </li>
                    {% endif %} 
                {% endfor %}
            </ul>
        </div>
        <div class="one-third column" style="height:200px;">
            <ul class="flex-container column">
                <li class="flex-item">Tools
                </li>
                {% for page in site.pages %} 
                    {% if page.title and page.category == 'tool' %}
                    <li class="flex-item">
                        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a> 
                    </li>
                    {% endif %} 
                {% endfor %}
            </ul>
        </div>
    </div> 
</section>

<div style="height:500px;"> </div>

