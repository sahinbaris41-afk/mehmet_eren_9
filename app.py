import streamlit as st
from pathlib import Path

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in tüm varsayılan sınırlarını ve boşluklarını acımasızca sıfırlayan CSS
st.markdown("""
    <style>
        /* Tüm Streamlit kapsayıcılarını tam genişlik yap */
        .stApp, 
        .main, 
        .block-container, 
        [data-testid="stAppViewContainer"], 
        [data-testid="stAppViewContainer"] > section {
            padding: 0rem !important; 
            margin: 0rem !important; 
            max-width: 100% !important;
        }
        /* Iframe kapsayıcısı ve kendisi */
        div[data-testid="stIFrame"], iframe { 
            width: 100% !important; 
            height: 100vh !important; 
            border: none !important; 
        }
        /* Üst menü ve footer'ı gizle */
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Iframe'i tam genişlik (stretch) ve yükseklikte yükle
html_file_path = Path(__file__).parent / "static" / "index.html"
st.iframe(html_file_path, width='stretch', height=1000)