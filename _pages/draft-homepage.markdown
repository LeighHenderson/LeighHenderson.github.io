---
title: Draft homepage
description: Welcome to academic biomedical research. Here's your introduction to the protocols used in university laboratories, with emphasis on basic concepts.

permalink: /draft-homepage/
layout: default
category: draft
stylesheets: 
  - flexbox-gallery
  - home-page
---

<!-- <img src="{{ site.url }}{{ site.logo}}" alt="LCL pipettor logo" width="100%"> -->

<header>
  <div class="container">
    <div class="row">
      <div class="one-third column" style="height:200px;">
      </div>
      <div class="one-third column" style="background:black; opacity:0.5;  padding:10px;">
        <h3 style="color:white; text-align:center;">{{ site.title }}
          <br><i class="fa fa-flask"></i>
        </h3>
      </div>
    </div>
  </div>
</header>


<div style="height:50px;">
</div>

<section class="container">
  <ul class="flex-container">
    {% for page in site.pages %} 
      {% if page.title and page.category != 'navigation' %}
        <li class ="flex-item"><a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
      {% endif %} 
    {% endfor %}
  </ul>
</section>

<div style="height:50px;">
</div>

<!-- future direction: slideshow that goes through graphical-abstract images

<div>
  <ul class="flex-container" style="flex-direction:column; width:150px;">
    {% for page in site.pages %} 
      {% if page.graphical-abstract and page.graphical-abstract != '' %}
        <li class ="flex-item">
          <img src="{{ site.url }}/assets/{{ page.graphical-abstract }}">
        </li>
        <li class ="flex-item">
          <p>{{ page.title }}</p>
        </li>
      {% endif %} 
    {% endfor %}
  </ul>
</div>

-->
