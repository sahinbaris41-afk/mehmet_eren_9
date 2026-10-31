import streamlit as st
import streamlit.components.v1 as components
import os

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in kendi boşluklarını tamamen sıfırlayan ve paneli tam ekran yapan CSS
st.markdown("""
    <style>
        .block-container { padding-top: 0rem !important; padding-bottom: 0rem !important; padding-left: 0rem !important; padding-right: 0rem !important; }
        iframe { width: 100% !important; border: none !important; }
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Yerel HTML panelinin konumunu belirle
html_path = os.path.join(os.path.dirname(__file__), "panel", "index.html")

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Sunucuda en stabil çalışan components.html ile tam ekran render et
components.html(html_content, height=1000, scrolling=True)
